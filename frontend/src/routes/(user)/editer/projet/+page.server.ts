import { getDb } from '$utils/database';
import { StatusCode } from '$utils/enums';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const actions: Actions = {
	create: async (event) => {
		const d = await event.request.formData();
		const v = zfd
			.formData({
				title: zfd.text(z.string().min(10)),
			})
			.safeParse(d);
		if (!v.success) {
			return fail(StatusCode.BadRequest, v.error.formErrors.fieldErrors);
		}
		const db = await getDb(event);
		const createRes = await db.from('projects').insert(v.data).select('id').single();
		if (createRes.error) {
			throw error(500, createRes.error);
		}
		throw redirect(302, `/editer/projet/${createRes.data?.id}`);
	},
};