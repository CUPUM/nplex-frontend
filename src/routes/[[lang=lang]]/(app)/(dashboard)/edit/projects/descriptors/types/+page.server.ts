import * as m from '$i18n/messages';
import { guardRoleContentManagement } from '$lib/auth/guard.server';
import { dbpool } from '$lib/db/db.server';
import { projectTypes, projectTypesTranslations } from '$lib/db/schema/public';
import { excluded } from '$lib/db/sql.server';
import { withTranslations } from '$lib/db/utils.server';
import { withTranslationsSchema } from '$lib/db/validation.server';
import {
	messageInvalidProjectDescriptor,
	messageServerError,
	messageServerSuccess,
} from '$lib/forms/messages';
import { STATUS_CODES } from '$lib/utils/constants';
import { eq } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const updateSchema = withTranslationsSchema(
	createInsertSchema(projectTypes).required({ id: true }),
	createInsertSchema(projectTypesTranslations)
);

const createSchema = updateSchema.omit({ id: true });

const listSchema = z.object({ id: z.string() });

export const load = async (event) => {
	await guardRoleContentManagement(event);
	const types = await withTranslations(projectTypes, projectTypesTranslations, {
		field: (t) => t.id,
		reference: (tt) => tt.id,
	});
	const [newForm, listForm, ...updateForms] = await Promise.all([
		superValidate(createSchema),
		superValidate(listSchema),
		...types.map((type) => superValidate(type, updateSchema, { id: type.id })),
	]);
	return { updateForms, listForm, newForm };
};

export const actions = {
	create: async (event) => {
		await guardRoleContentManagement(event);
		const form = await superValidate(event, createSchema);
		if (!form.valid) {
			return message(form, messageInvalidProjectDescriptor(m.project_type()));
		}
		try {
			const { translations, ...pt } = form.data;
			await dbpool.transaction(async (tx) => {
				const [{ id }] = await tx
					.insert(projectTypes)
					.values(pt)
					.returning({ id: projectTypes.id });
				await tx
					.insert(projectTypesTranslations)
					.values(Object.values(translations).map((tt) => ({ ...tt, id })));
			});
		} catch (e) {
			console.error(e);
			return message(form, messageServerError(), { status: STATUS_CODES.INTERNAL_SERVER_ERROR });
		}
		return message(form, messageServerSuccess());
	},
	update: async (event) => {
		await guardRoleContentManagement(event);
		const form = await superValidate(event, updateSchema);
		if (!form.valid) {
			return message(form, messageInvalidProjectDescriptor(m.project_type()));
		}
		try {
			const { translations, id, ...pt } = form.data;
			await dbpool.transaction(async (tx) => {
				await Promise.all([
					tx.update(projectTypes).set(pt).where(eq(projectTypes.id, id)),
					tx
						.insert(projectTypesTranslations)
						.values(Object.values(translations))
						.onConflictDoUpdate({
							target: [projectTypesTranslations.id, projectTypesTranslations.lang],
							set: excluded(projectTypesTranslations),
						}),
				]);
			});
		} catch (e) {
			console.error(e);
			return message(form, messageServerError(), { status: STATUS_CODES.INTERNAL_SERVER_ERROR });
		}
		return message(form, messageServerSuccess());
	},
	delete: async (event) => {
		await guardRoleContentManagement(event);
		const form = await superValidate(event, listSchema);
		if (!form.valid) {
			return message(form, messageInvalidProjectDescriptor(m.project_type()));
		}
		try {
			await dbpool.delete(projectTypes).where(eq(projectTypes.id, form.data.id));
		} catch (e) {
			return message(form, messageServerError(), { status: STATUS_CODES.INTERNAL_SERVER_ERROR });
		}
		return message(form, messageServerSuccess());
	},
};
