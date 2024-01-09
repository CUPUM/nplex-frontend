import * as m from '$i18n/messages';
import { USER_ROLES } from '$lib/auth/constants';
import { guardAuth } from '$lib/auth/guard.server';
import { usersRolesRequestSchema, usersSchema } from '$lib/db/crud.server';
import { dbpool } from '$lib/db/db.server';
import { getUserRolesList } from '$lib/db/queries.server';
import { users, usersRolesRequests } from '$lib/db/schema/accounts';
import { TRUE } from '$lib/db/sql.server';
import { STATUS_CODES } from '$lib/utils/constants';
import { error } from '@sveltejs/kit';
import { eq, getTableColumns, sql } from 'drizzle-orm';
import { message, superValidate } from 'sveltekit-superforms/client';
import { z } from 'zod';

const generalSchema = usersSchema.pick({
	firstName: true,
	middleName: true,
	lastName: true,
	publicEmail: true,
});

const permissionSchema = z.object({
	role: usersSchema.shape.role,
	requestedAt: usersRolesRequestSchema.shape.requestAt.nullable(),
	requestedRole: usersRolesRequestSchema.shape.requestedRole.nullable(),
});

const manageSchema = z.object({});

export const load = async (event) => {
	const session = await guardAuth(event);
	const { firstName, middleName, lastName, role, publicEmail, publicEmailVerified } =
		getTableColumns(users);
	const [{ permissions, ...user }] = await dbpool
		.select({
			firstName,
			middleName,
			lastName,
			publicEmail,
			publicEmailVerified,
			permissions: {
				role,
				requestedAt: usersRolesRequests.requestAt,
				requestedRole: usersRolesRequests.requestedRole,
			},
		})
		.from(users)
		.where(eq(users.id, session.user.id))
		.leftJoin(usersRolesRequests, eq(users.id, usersRolesRequests.userId))
		.limit(1);
	if (!user) {
		error(STATUS_CODES.NOT_FOUND, m.auth_noUserFound());
	}
	const generalForm = superValidate(user, generalSchema);
	const permissionsForm = superValidate(permissions, permissionSchema);
	const manageForm = superValidate(manageSchema);
	return {
		generalForm,
		permissionsForm,
		manageForm,
		publicEmailVerified: user.publicEmailVerified,
		roles: getUserRolesList(event),
	};
};

export const actions = {
	update: async (event) => {
		const session = await guardAuth(event);
		const generalForm = await superValidate(event, generalSchema);
		if (!generalForm.valid) {
			return message(generalForm, {
				title: m.invalidData(),
				description: m.invalid_data_details(),
			});
		}
		try {
			await dbpool
				.update(users)
				.set({
					...generalForm.data,
					publicEmailVerified:
						session.user.role === USER_ROLES.ADMIN && generalForm.data.publicEmail != null
							? TRUE()
							: sql`case when ${users.publicEmail} = ${generalForm.data.publicEmail} then true else false end`,
				})
				.where(eq(users.id, session.user.id));
			return message(generalForm, { title: m.success(), description: m.success_saved_data() });
		} catch (e) {
			return message(
				generalForm,
				{
					title: m.error(),
					description: m.error_details(),
				},
				{
					status: STATUS_CODES.INTERNAL_SERVER_ERROR,
				}
			);
		}
	},
	delete: async (event) => {
		const session = await guardAuth(event);
		const manageForm = await superValidate(event, manageSchema);
		try {
			await dbpool.delete(users).where(eq(users.id, session.user.id));
			return message(manageForm, {
				title: m.success(),
				description: m.success_saved_data(),
			});
		} catch (e) {
			console.error(e);
			return message(
				manageForm,
				{
					title: m.error(),
					description: m.error_details(),
				},
				{ status: STATUS_CODES.INTERNAL_SERVER_ERROR }
			);
		}
	},
	uploadAvatar: async () => {
		// to do
	},
	verifyEmail: async () => {
		// to do:
	},
	// requestRole: async (event) => {
	// 	const session = await withAuth(event);
	// },
	// delete: async (event) => {},
};
