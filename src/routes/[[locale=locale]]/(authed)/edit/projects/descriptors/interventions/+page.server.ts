import { USER_ROLES } from '$lib/auth/constants';
import { withRole } from '$lib/auth/guard.server';

export const load = async (event) => {
	const session = await withRole(event, USER_ROLES.ADMIN);
};

export const actions = {};
