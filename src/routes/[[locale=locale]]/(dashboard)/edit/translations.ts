import { createTranslations } from '$lib/i18n/translate';

export const dt = createTranslations({
	fr: {
		save: 'Enregistrer',
		create: (entity: string) => `Ajouter un ${entity}`,
		title: 'Titre',
		summary: 'Sommaire (description brève)',
		description: 'Description',
	},
	en: {
		save: 'Save',
		create: (entity: string) => `Create a new ${entity}`,
		title: 'Title',
		summary: 'Summary (shorter description)',
		description: 'Description',
	},
});