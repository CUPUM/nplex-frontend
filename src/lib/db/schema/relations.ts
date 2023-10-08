import { relations } from 'drizzle-orm';
import { locales } from './i18n';
import {
	organizationTypes,
	organizationTypesTranslations,
	organizations,
	projectBuildingLevelTypes,
	projectBuildingLevelTypesTranslations,
	projectExemplarityCategories,
	projectExemplarityCategoriesTranslations,
	projectExemplarityIndicators,
	projectExemplarityIndicatorsTranslations,
	projectImageTypes,
	projectImageTypesTranslations,
	projectImplantationTypes,
	projectImplantationTypesTranslations,
	projectInterventionCategories,
	projectInterventionCategoriesTranslations,
	projectInterventions,
	projectInterventionsTranslations,
	projectSiteOwnerships,
	projectSiteOwnershipsTranslations,
	projectTypes,
	projectTypesToInterventions,
	projectTypesTranslations,
	projects,
	projectsTranslations,
} from './public';

export const projectTypesRelations = relations(projectTypes, ({ many }) => {
	return {
		projects: many(projects),
		translations: many(projectTypesTranslations),
		interventions: many(projectInterventions),
	};
});
export const projectTypesTranslationsRelations = relations(projectTypesTranslations, ({ one }) => {
	return {
		locale: one(locales, {
			fields: [projectTypesTranslations.locale],
			references: [locales.locale],
		}),
		type: one(projectTypes, {
			fields: [projectTypesTranslations.id],
			references: [projectTypes.id],
		}),
	};
});

export const projectInterventionCategoriesRelations = relations(
	projectInterventionCategories,
	({ many }) => {
		return {
			translations: many(projectInterventionCategoriesTranslations),
			interventions: many(projectInterventions),
		};
	}
);
export const projectInterventionCategoriesTranslationsRelations = relations(
	projectInterventionCategoriesTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectInterventionCategoriesTranslations.locale],
				references: [locales.locale],
			}),
			category: one(projectInterventionCategories, {
				fields: [projectInterventionCategoriesTranslations.id],
				references: [projectInterventionCategories.id],
			}),
		};
	}
);

export const projectInterventionsRelations = relations(projectInterventions, ({ many, one }) => {
	return {
		translations: many(projectInterventionsTranslations),
		category: one(projectInterventionCategories, {
			fields: [projectInterventions.categoryId],
			references: [projectInterventionCategories.id],
		}),
		types: many(projectTypes),
	};
});
export const projectInterventionsTranslationsRelations = relations(
	projectInterventionsTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectInterventionsTranslations.locale],
				references: [locales.locale],
			}),
			intervention: one(projectInterventions, {
				fields: [projectInterventionsTranslations.id],
				references: [projectInterventions.id],
			}),
		};
	}
);

export const projectTypesToInterventionsRelations = relations(
	projectTypesToInterventions,
	({ one }) => {
		return {
			type: one(projectTypes, {
				fields: [projectTypesToInterventions.typeId],
				references: [projectTypes.id],
			}),
			intervention: one(projectInterventions, {
				fields: [projectTypesToInterventions.interventionId],
				references: [projectInterventions.id],
			}),
		};
	}
);

export const projectSiteOwnershipsRelations = relations(projectSiteOwnerships, ({ many }) => {
	return {
		translations: many(projectSiteOwnershipsTranslations),
	};
});
export const projectSiteOwnershipsTranslationsRelations = relations(
	projectSiteOwnershipsTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectSiteOwnershipsTranslations.locale],
				references: [locales.locale],
			}),
			siteOwnership: one(projectSiteOwnerships, {
				fields: [projectSiteOwnershipsTranslations.id],
				references: [projectSiteOwnerships.id],
			}),
		};
	}
);

export const projectImplantationTypesRelations = relations(projectImplantationTypes, ({ many }) => {
	return {
		translations: many(projectImplantationTypesTranslations),
	};
});
export const projectImplantationTypesTranslationsRelations = relations(
	projectImplantationTypesTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectImplantationTypesTranslations.locale],
				references: [locales.locale],
			}),
			siteOwnership: one(projectImplantationTypes, {
				fields: [projectImplantationTypesTranslations.id],
				references: [projectImplantationTypes.id],
			}),
		};
	}
);

export const projectExemplarityCategoriesRelations = relations(
	projectExemplarityCategories,
	({ many }) => {
		return {
			translations: many(projectExemplarityCategoriesTranslations),
			indicators: many(projectExemplarityIndicators),
		};
	}
);
export const projectExemplarityCategoriesTranslationsRelations = relations(
	projectExemplarityCategoriesTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectExemplarityCategoriesTranslations.locale],
				references: [locales.locale],
			}),
			siteOwnership: one(projectExemplarityCategories, {
				fields: [projectExemplarityCategoriesTranslations.id],
				references: [projectExemplarityCategories.id],
			}),
		};
	}
);

export const projectExemplarityIndicatorsRelations = relations(
	projectExemplarityIndicators,
	({ many, one }) => {
		return {
			category: one(projectExemplarityCategories, {
				fields: [projectExemplarityIndicators.categoryId],
				references: [projectExemplarityCategories.id],
			}),
			translations: many(projectExemplarityIndicatorsTranslations),
		};
	}
);
export const projectExemplarityIndicatorsTranslationsRelations = relations(
	projectExemplarityIndicatorsTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectExemplarityIndicatorsTranslations.locale],
				references: [locales.locale],
			}),
			siteOwnership: one(projectExemplarityIndicators, {
				fields: [projectExemplarityIndicatorsTranslations.id],
				references: [projectExemplarityIndicators.id],
			}),
		};
	}
);

export const projectImageTypesRelations = relations(projectImageTypes, ({ many }) => {
	return {
		translations: many(projectImageTypesTranslations),
	};
});
export const projectImageTypesTranslationsRelations = relations(
	projectImageTypesTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectImageTypesTranslations.locale],
				references: [locales.locale],
			}),
			siteOwnership: one(projectImageTypes, {
				fields: [projectImageTypesTranslations.id],
				references: [projectImageTypes.id],
			}),
		};
	}
);

export const projectBuildingLevelTypesRelations = relations(
	projectBuildingLevelTypes,
	({ many }) => {
		return {
			translations: many(projectBuildingLevelTypesTranslations),
		};
	}
);
export const projectBuildingLevelTypesTranslationsRelations = relations(
	projectBuildingLevelTypesTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [projectBuildingLevelTypesTranslations.locale],
				references: [locales.locale],
			}),
			siteOwnership: one(projectBuildingLevelTypes, {
				fields: [projectBuildingLevelTypesTranslations.id],
				references: [projectBuildingLevelTypes.id],
			}),
		};
	}
);

export const projectsRelations = relations(projects, ({ one, many }) => {
	return {
		translations: many(projectsTranslations),
		type: one(projectTypes, {
			fields: [projects.typeId],
			references: [projectTypes.id],
		}),
	};
});
export const projectsTranslationsRelations = relations(projectsTranslations, ({ one }) => {
	return {
		locale: one(locales, {
			fields: [projectsTranslations.locale],
			references: [locales.locale],
		}),
		project: one(projects, {
			fields: [projectsTranslations.id],
			references: [projects.id],
		}),
	};
});

export const organizationTypesRelations = relations(organizationTypes, ({ many }) => {
	return {
		organizations: many(organizations),
		translations: many(organizationTypesTranslations),
	};
});
export const organizationTypesTranslationsRelations = relations(
	organizationTypesTranslations,
	({ one }) => {
		return {
			locale: one(locales, {
				fields: [organizationTypesTranslations.locale],
				references: [locales.locale],
			}),
			type: one(organizationTypes, {
				fields: [organizationTypesTranslations.id],
				references: [organizationTypes.id],
			}),
		};
	}
);