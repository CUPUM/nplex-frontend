import { fixTypes } from '$types/database/utils';
import { STATUS_CODES } from '$utils/enums';
import { pagination } from '$utils/format';
import { error } from '@sveltejs/kit';

async function getEditableProjects(db: App.DatabaseClient, start: number = 0, end: number = 10) {
	const projects = await db
		.from('editable_projects')
		.select(
			`
			*,
			type:project_type(*),
			banner:projects_images!banner_id(*),
			gallery:projects_images!project_id(*),
			publication_status:projects_publication_status(*)
		`
		)
		.order('updated_at', { ascending: false })
		.range(...pagination(start, end));
	if (projects.error) {
		console.error(projects.error);
		return [];
	}
	return fixTypes(projects.data)
		.toMaybeSingle<{ banner: true }>()
		.toSingle<{ publication_status: true; type: true }>().data;
}

async function getEditableOrgs(db: App.DatabaseClient, start: number = 0, end: number = 10) {
	const orgs = await db
		.from('editable_organizations')
		.select(
			`
		*
		`
		)
		.order('updated_at', { ascending: false })
		.range(...pagination(start, end));
	if (orgs.error) {
		console.error(orgs.error);
		return [];
	}
	return orgs.data;
}

async function getEditableActors(db: App.DatabaseClient, start: number = 0, end: number = 10) {
	const actors = await db
		.from('editable_actors')
		.select(
			`
		*
		`
		)
		.order('updated_at', { ascending: false })
		.range(...pagination(start, end));
	if (actors.error) {
		console.error(actors.error);
		return [];
	}
	return actors.data;
}

export const load = async (event) => {
	if (!event.locals.session) {
		throw error(STATUS_CODES.Unauthorized, {
			message: 'Oops. Vous devez être connecté pour accéder à cette section de Nplex.',
		});
	}
	try {
		const editableProjects = getEditableProjects(event.locals.db);
		const editableOrgs = getEditableOrgs(event.locals.db);
		const editableActors = getEditableActors(event.locals.db);
		return {
			defer: {
				editableProjects,
				editableOrgs,
				editableActors,
			},
		};
	} catch (err) {
		throw error(STATUS_CODES.InternalServerError, JSON.stringify(err));
	}
};