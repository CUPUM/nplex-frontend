import { getUserTheme } from '$routes/RootTheme.svelte';
import { getDb } from '$utils/database/client';
import { COOKIES } from '$utils/enums';
import { safeJsonParse } from '$utils/json';
import { THEMES } from '$utils/themes';
import type { Handle } from '@sveltejs/kit';

/**
 * To do: validate app version correspondance between client and server and clear cookies
 * accordingly.
 */
export const handle = (async ({ event, resolve }) => {
	event.locals.session = safeJsonParse(event.cookies.get(COOKIES.SESSION)) ?? undefined;
	event.locals.db = await getDb(event);

	const theme = THEMES[getUserTheme(event)];
	const res = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%app.theme%', theme),
	});

	return res;
}) satisfies Handle;
