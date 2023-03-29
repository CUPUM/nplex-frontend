import type { Routes } from '$utils/routes';

export const PROJECT_DESCIPTORS_EDITOR_BASE = {
	title: 'Descripteurs de projets',
	pathname: '/editer/descripteurs/projets',
};

function base(subpath: string) {
	return PROJECT_DESCIPTORS_EDITOR_BASE.pathname + subpath;
}

export const PROJECT_DESCRIPTORS_EDITOR_ROUTES = {
	Interventions: {
		title: 'Interventions de projet',
		label: 'Interventions',
		pathname: base('/interventions'),
	},
	Indicators: {
		title: 'Indicateurs d’exemplarité',
		label: 'Indicateurs',
		pathname: base('/indicateurs'),
	},
	Usages: {
		title: 'Usages et catégories d’usages',
		label: 'Usages',
		pathname: base('/usages-et-categories'),
	},
	Events: {
		title: 'Types d’événement ou de phase',
		label: 'Événements & phases',
		pathname: base('/evenements-et-phases'),
	},
	Materials: {
		title: 'Types de matériaux et applications',
		label: 'Matériaux & applications',
		pathname: base('/materiaux-et-applications'),
	},
} satisfies Routes<{ label: string }>;
