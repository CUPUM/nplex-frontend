import { getDb } from '$utils/database';
import { COOKIES } from '$utils/enums';
import { safeJsonParse } from '$utils/json';
import type { AuthSession } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';
import { clearSession, SERVER_COOKIE_OPTIONS, tokenData } from '../common';
import type { RequestHandler } from './$types';

/**
 * Use this endpoint to initialize or update a session cookie, EXCLUDING signouts. It verifies the
 * previous cookies or the posted data sets an updated cookie accordingly, while also returning the
 * extended user data to populate PageData. It is thus imperative that this endpoint always resolve
 * with returned data to set, update, or erase the session in both the client's data props and
 * cookies. The data in question should abide by the shape of App.PageData['session'] or null.
 */
export const POST: RequestHandler = async (event) => {
	let authSession: AuthSession | null = safeJsonParse(event.cookies.get(COOKIES.AUTH));
	const db = await getDb(event);
	if (authSession) {
		event.cookies.delete(COOKIES.AUTH, { path: '/' });
		await db.auth.setSession(authSession);
	} else {
		authSession = (await db.auth.getSession()).data.session;
	}
	if (!authSession) {
		return clearSession(event);
	}

	const profileRes = await db
		.from('users')
		.select(
			`
				public_email,
				first_name,
				avatar_url,
				role:users_roles!users_roles_user_id_fkey(
					role
				)
			`
		)
		.eq('id', authSession.user.id)
		.single();

	if (profileRes.error || !profileRes.data.role) {
		return clearSession(event);
	}

	const pageDataSession: App.PageData['session'] = {
		...authSession,
		user: {
			...authSession.user,
			...profileRes.data,
			role: Array.isArray(profileRes.data.role)
				? profileRes.data.role[0].role
				: profileRes.data.role.role,
		},
	};
	event.cookies.set(
		COOKIES.SESSION,
		JSON.stringify({
			...tokenData(pageDataSession),
			user: {
				id: pageDataSession.user.id,
				role: pageDataSession.user.role,
			},
		} satisfies App.Locals['session']),
		{
			...SERVER_COOKIE_OPTIONS,
			maxAge: authSession.expires_in,
		}
	);
	return json(pageDataSession);
};
