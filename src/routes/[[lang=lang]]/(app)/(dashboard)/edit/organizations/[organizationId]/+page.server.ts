import * as m from '$i18n/messages';
import { withAuth } from '$lib/auth/guard.server';
import { organizationGeneralUpdateSchema } from '$lib/db/crud.server';
import { dbpool } from '$lib/db/db.server';
import { organizations, organizationsTranslations } from '$lib/db/schema/public';
import { excluded } from '$lib/db/sql.server';
import { reduceTranslations } from '$lib/db/utils';
import { STATUS_CODES } from '$lib/utils/constants';
import { error, fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async (event) => {
	await withAuth(event);
	const rawOrg = await dbpool.query.organizations.findFirst({
		where(f, o) {
			return o.eq(f.id, event.params.organizationId);
		},
		with: {
			translations: true,
		},
	});
	if (!rawOrg) {
		throw error(STATUS_CODES.NOT_FOUND, m.org_notFound());
	}
	const org = reduceTranslations(rawOrg);
	const form = await superValidate(org, organizationGeneralUpdateSchema);
	return { form };
};

export const actions = {
	update: async (event) => {
		await withAuth(event);
		const form = await superValidate(event, organizationGeneralUpdateSchema);
		if (!form.valid) {
			return fail(STATUS_CODES.BAD_REQUEST, { form });
		}
		try {
			await dbpool.transaction(async (tx) => {
				const { translations, ...org } = form.data;
				await tx
					.update(organizations)
					.set(org)
					.where(eq(organizations.id, event.params.organizationId));
				await tx
					.insert(organizationsTranslations)
					.values(Object.values(translations))
					.onConflictDoUpdate({
						target: [organizationsTranslations.id, organizationsTranslations.lang],
						set: excluded(organizationsTranslations),
					});
			});
			return { form };
		} catch (e) {
			return fail(STATUS_CODES.INTERNAL_SERVER_ERROR, { form });
		}
	},
};