import { messages } from '$stores/messages';
import type { LoadEvent, LoadOutput } from '@sveltejs/kit';
import { SearchParam } from './keys';

interface GuardInput extends Pick<LoadEvent, 'session' | 'url' | 'fetch'> {
	/**
	 * Roles required to gain permission for a request.
	 */
	criteria: App.Session['user']['role'][];
	/**
	 * Custom message, overwrites the default message composition logic.
	 */
	errorMessage?: string;
}

/**
 * Guard function to evaluate access to a route based on auth/user state.
 */
export async function guard({ criteria, session, errorMessage, url, fetch }: GuardInput): Promise<LoadOutput> {
	try {
		// Lets first see if the client can fullfil the guard's requirements.
		if (criteria.length) {
			// If no logged-in user
			if (!session.user) {
				throw Error('Désolé, un compte est nécessaire pour accéder à cette section de Nplex.');
			}
			// If user isn't one of the accepted roles.
			else if (!criteria.includes(session.user.role)) {
				throw Error(
					'Désolé, il semble que votre compte ne détient pas les permissions requises pour accéder à cette section de Nplex.'
				);
			}
		}
		return {
			status: 200,
		};
	} catch (err) {
		messages.dispatch({
			text: errorMessage || err.message,
			type: 'error',
		});

		let redirectUrl = new URL(session.previousUrl);
		if (redirectUrl.pathname === url.pathname) {
			// If fallback url is equal to the inaccessible request origin, reset to root.
			redirectUrl.pathname = '';
		}
		if (!session.user) {
			redirectUrl = getAuthRedirectUrl(redirectUrl);
		}

		return {
			status: 303,
			redirect: redirectUrl.toString(),
		};
	}
}

export function getAuthRedirectUrl(targetUrl: URL) {
	const redirectUrl = new URL(targetUrl);
	redirectUrl.searchParams.set(SearchParam.AuthModal, 'true');
	return redirectUrl;
}

// /**
//  * Simple helper function to signup a new email user and handle errors.
//  */
// interface EmailSignUpInfo extends Omit<UserCredentials, 'provider' | 'oidc' | 'phone'> {
// 	firstname?: string;
// 	middlename?: string;
// 	lastname?: string;
// }
// export async function signUpWithEmail(info: EmailSignUpInfo) {
// 	try {
// 		const { user, error: signupError } = await db.auth.signUp({ email: info.email, password: info.password });
// 		if (signupError) throw signupError;
// 		const { body, error: profileError } = await db
// 			.from<definitions['users_profiles']>('users_profiles')
// 			.update({
// 				firstname: info.firstname || '',
// 				middlename: info.middlename || '',
// 				lastname: info.lastname || '',
// 			})
// 			.eq('user_id', user.id);
// 		if (profileError) throw profileError;
// 	} catch (err) {
// 		messages.dispatch({
// 			type: 'error',
// 			text: err.message,
// 		});
// 	}
// }

// /**
//  * Simple helper function to attempt signin an existing email user and handle errors.
//  */
// interface EmailSignInInfo {
// 	email: string;
// 	password: string;
// }
// export async function signInWithEmail({ email, password }: EmailSignInInfo) {
// 	try {
// 		const { user, error } = await db.auth.signIn(
// 			{ email, password },
// 			{
// 				redirectTo: null,
// 				shouldCreateUser: false,
// 			}
// 		);
// 		if (error) throw error;
// 		messages.dispatch({
// 			type: 'success',
// 			text: 'Connecté avec succès.',
// 		});
// 	} catch (error) {
// 		messages.dispatch({
// 			type: 'error',
// 			text: error.message,
// 		});
// 	}
// }