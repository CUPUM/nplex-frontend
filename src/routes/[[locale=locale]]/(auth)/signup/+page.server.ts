import { STATUS_CODE } from '$lib/utils/constants.js';
import type { Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const credentialsSchema = z
	.object({
		username: z.string(),
		password: z.string(),
		confirmPassword: z.string(),
	})
	.superRefine((d, ctx) => {
		if (d.confirmPassword !== d.password) {
			ctx.addIssue({
				fatal: true,
				code: z.ZodIssueCode.custom,
				message: 'Password and password confirmation do not match.',
			});
			return z.NEVER;
		}
	});

export const load = async (event) => {
	const session = await event.locals.auth.validate();
	if (session) {
		throw event.locals.redirect(STATUS_CODE.MOVED_TEMPORARILY, '/i');
	}
	const form = await superValidate(credentialsSchema);
	return { form };
};

export const actions = {
	emailPassword: async (event) => {
		const form = await superValidate(event, credentialsSchema);
		console.log(form);
		return { form };
	},
} satisfies Actions;
