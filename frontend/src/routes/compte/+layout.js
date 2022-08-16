import { guard } from '$utils/routing/guards';
import type { PageLoad } from '@sveltejs/kit';

export const load: PageLoad = async ({ session, url, fetch }) => {
	const res = await guard.role({ roles: ['admin', 'editor', 'visitor'], session, url });
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return res;
};
