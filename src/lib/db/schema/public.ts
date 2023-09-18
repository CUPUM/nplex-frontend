import { USER_ROLES } from '$lib/auth/constants';
import { LOCALES } from '$lib/i18n/constants';
import { strictRecord } from '$lib/utils/zod';
import { relations } from 'drizzle-orm';
import {
	boolean,
	integer,
	pgTable,
	pgView,
	primaryKey,
	text,
	timestamp,
	unique,
} from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { userIdForeignKey } from '../references/accounts';
import { localeForeignKey } from '../references/i18n';
import { generateNanoid } from '../sql';
import { userRoles } from './accounts';
import { identity, intrange, locale, nanoid, userRole } from './custom-types';
import { locales } from './i18n';

/**
 * Top-most categories of projects.
 */
export const projectTypes = pgTable('project_types', {
	id: identity('id').primaryKey(),
	index: integer('index').unique(),
});

/**
 * @see {@link projectTypes}
 */
export const projectTypesTranslations = pgTable(
	'project_types_t',
	{
		id: integer('id').references(() => projectTypes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: localeForeignKey('locale'),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

export const projectTypesToTranslationsRelations = relations(projectTypes, ({ many }) => {
	return { translations: many(projectTypesTranslations) };
});

export const projectTranslationsToTypesRelations = relations(
	projectTypesTranslations,
	({ one }) => {
		return {
			type: one(projectTypes, {
				fields: [projectTypesTranslations.id],
				references: [projectTypes.id],
			}),
		};
	}
);

/**
 * Grouping of project intervention types.
 */
export const projectInterventionCategories = pgTable('project_intervention_categories', {
	id: identity('id').primaryKey(),
	index: integer('index').unique(),
});

/**
 * @see {@link projectInterventionCategories}
 */
export const projectInterventionCategoriesTranslations = pgTable(
	'project_intervention_categories_t',
	{
		id: integer('id').references(() => projectInterventionCategories.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

export const projectInterventionCategoriesToTranslationsRelations = relations(
	projectInterventionCategories,
	({ many }) => {
		return {
			translations: many(projectInterventionCategoriesTranslations),
		};
	}
);

export const projectTranslationsToInterventionCategoriesRelations = relations(
	projectInterventionCategoriesTranslations,
	({ one }) => {
		return {
			interventionCategory: one(projectInterventionCategories, {
				fields: [projectInterventionCategoriesTranslations.id],
				references: [projectInterventionCategories.id],
			}),
		};
	}
);

/**
 * Sub classification of projects by their intervention(s)
 */
export const projectInterventions = pgTable('project_interventions', {
	id: identity('id').primaryKey(),
	categoryId: integer('category_id')
		.references(() => projectInterventionCategories.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		})
		.notNull(),
	maybePermit: boolean('maybe_permit'),
});

/**
 * @see {@link projectInterventionTypes}
 */
export const projectInterventionsTranslations = pgTable(
	'project_interventions_t',
	{
		id: integer('id').references(() => projectInterventions.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

export const projectInterventionsToTranslationsRelations = relations(
	projectInterventions,
	({ many }) => {
		return {
			translations: many(projectInterventionsTranslations),
		};
	}
);

export const projectTranslationsToInterventionsRelations = relations(
	projectInterventionsTranslations,
	({ one }) => {
		return {
			interventionType: one(projectInterventions, {
				fields: [projectInterventionsTranslations.id],
				references: [projectInterventions.id],
			}),
		};
	}
);

/**
 * Restricting intervention types based on project types.
 *
 * @see {@link projectTypes}
 * @see {@link projectInterventions}
 */
export const projectTypesToInterventions = pgTable(
	'project_types_to_intervention',
	{
		typeId: integer('type_id').references(() => projectTypes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		interventionId: integer('intervention_id').references(() => projectInterventions.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
	},
	(table) => {
		return {
			pk: primaryKey(table.typeId, table.interventionId),
		};
	}
);

/**
 * The type of owner for the site where the projet is situated.
 */
export const projectSiteOwnerships = pgTable('project_site_ownerships', {
	id: identity('id').primaryKey(),
	index: integer('index').unique(),
});

/**
 * @see {@link projectSiteOwnerships}
 */
export const projectSiteOwnershipsTranslations = pgTable(
	'project_site_ownerships_t',
	{
		id: integer('id').references(() => projectSiteOwnerships.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

/**
 * How is the project's building integrated amongst the surrounding constructions.
 */
export const projectImplantationTypes = pgTable('project_implantation_types', {
	id: identity('id').primaryKey(),
	index: integer('index').unique(),
});

/**
 * @see {@link projectImplantationTypes}
 */
export const projectImplantationTypesTranslations = pgTable(
	'project_implantation_types_t',
	{
		id: integer('id').references(() => projectImplantationTypes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

/**
 * Groupings of exemplarity indicators. Inspired by the City of Montreal's Design Agenda 2030.
 */
export const projectExemplarityCategories = pgTable('project_exemplarity_categories', {
	id: identity('id').primaryKey(),
	index: integer('index').unique(),
});

/**
 * @see {@link projectExemplarityCategories}
 */
export const projectExemplarityCategoriesTranslations = pgTable(
	'project_exemplarity_categories_t',
	{
		id: integer('id').references(() => projectExemplarityCategories.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

export const projectExemplarityIndicators = pgTable('project_exemplarity_indicators', {
	id: identity('id').primaryKey(),
	categoryId: integer('category_id')
		.references(() => projectExemplarityCategories.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		})
		.notNull(),
});

export const projectExemplarityIndicatorsTranslations = pgTable(
	'project_exemplarity_indicators_t',
	{
		id: integer('id').references(() => projectExemplarityIndicators.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		shortTitle: text('short_title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

/**
 * Various types of items that can be added to project galleries.
 */
export const projectImageTypes = pgTable('project_image_types', {
	id: identity('id').primaryKey(),
});

/**
 * @see {@link projectImageTypes}
 */
export const projectImageTypesTranslations = pgTable(
	'project_image_types_t',
	{
		id: integer('id').references(() => projectImageTypes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

//
// Projects
//

/**
 * Core projects table.
 */
export const projects = pgTable('projects', {
	id: nanoid('id').default(generateNanoid()).primaryKey(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
	createdById: userIdForeignKey('created_by_id', {
		onDelete: 'restrict',
		onUpdate: 'cascade',
	}).notNull(),
	updatedById: userIdForeignKey('updated_by_id', { onDelete: 'set null', onUpdate: 'cascade' }),
	publishedAt: timestamp('published_at', { withTimezone: true }),
	typeId: integer('type_id').references(() => projectTypes.id, {
		onDelete: 'set null',
		onUpdate: 'cascade',
	}),
	siteOwnershipId: integer('site_ownership_id').references(() => projectSiteOwnerships.id, {
		onDelete: 'set null',
		onUpdate: 'cascade',
	}),
	implantationTypeId: integer('implantation_type_id').references(
		() => projectImplantationTypes.id,
		{
			onDelete: 'set null',
			onUpdate: 'cascade',
		}
	),
	adjacentStreets: integer('adjacent_streets'),
	adjacentAlleys: integer('adjacent_alleys'),
	costRange: intrange('cost_range'),
	// location: postgis(),
	// obfuscatedLocation: postgist(),
	// likesCount: integer('likes_count').notNull().default(0),
});

export const projectsInsertSchema = createInsertSchema(projects, {
	// Refine zod schema here
	adjacentStreets: (s) => s.adjacentStreets.positive().max(5),
	adjacentAlleys: (s) => s.adjacentAlleys.positive().max(5),
});

/**
 * @see {@link projects}
 */
export const projectsTranslations = pgTable(
	'projects_t',
	{
		id: nanoid('id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		summary: text('summary'),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
			unq: unique().on(table.locale, table.title),
		};
	}
);

export const projectsTranslationsInsertSchema = createInsertSchema(projectsTranslations, {
	title: (s) => s.title.max(250),
	summary: (s) => s.summary.max(1500),
	description: (s) => s.description.max(5000),
});

export const projectsTranslationsRecordInsertSchema = strictRecord(
	LOCALES,
	projectsTranslationsInsertSchema.omit({ locale: true, id: true })
);

/**
 * Always use this location for public viewing.
 *
 * @see {@link projects}
 */
export const projectsObfuscatedLocations = pgView('projects_obfuscated_locations', {
	projectId: nanoid('project_id')
		.references(() => projects.id, { onDelete: 'cascade', onUpdate: 'cascade' })
		.primaryKey(),
	// point: postgis...
});

export const projectsInterventions = pgTable(
	'projects_interventions',
	{
		projectId: nanoid('project_id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		interventionId: integer('intervention_id').references(() => projectInterventions.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
	},
	(table) => {
		return {
			pk: primaryKey(table.projectId, table.interventionId),
		};
	}
);

export const projectsExemplarityIndicators = pgTable(
	'projects_exemplarity_indicators',
	{
		projectId: nanoid('project_id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		exemplarityIndicatorId: integer('exemplarity_indicator_id').references(
			() => projectExemplarityIndicators.id,
			{ onDelete: 'cascade', onUpdate: 'cascade' }
		),
	},
	(table) => {
		return {
			fk: primaryKey(table.projectId, table.exemplarityIndicatorId),
		};
	}
);

export const projectsImages = pgTable(
	'projects_images',
	{
		id: nanoid('id').default(generateNanoid()).primaryKey(),
		projectId: nanoid('project_id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		date: timestamp('date', { withTimezone: true }),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
		createdById: userIdForeignKey('created_by_id', {
			onDelete: 'restrict',
			onUpdate: 'cascade',
		}).notNull(),
		updatedById: userIdForeignKey('updated_by_id', { onDelete: 'restrict', onUpdate: 'cascade' }),
		index: integer('index'),
		publicUrl: text('public_url').notNull(),
		storageName: text('storage_name').notNull(),
		typeId: integer('type_id').references(() => projectImageTypes.id, {
			onDelete: 'set null',
			onUpdate: 'cascade',
		}),
	},
	(table) => {
		return {
			unq: unique().on(table.projectId, table.index),
		};
	}
);

export const projectsImagesTranslations = pgTable(
	'projects_images_t',
	{
		id: nanoid('id').references(() => projectsImages.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

export const projectsImagesCreditDetails = pgTable('projects_images_credits_details', {
	id: nanoid('id').default(generateNanoid()).primaryKey(),
	projectId: nanoid('project_id')
		.references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		})
		.notNull(),
	firstName: text('first_name'),
	middleName: text('middle_name'),
	lastName: text('last_name'),
	url: text('url'),
	description: text('description'),
	organizationId: nanoid('organization_id').references(() => organizations.id, {
		onDelete: 'set null',
		onUpdate: 'cascade',
	}),
	userId: userIdForeignKey('user_id', {
		onDelete: 'set null',
		onUpdate: 'cascade',
	}),
});

export const projectsImagesCredits = pgTable(
	'projects_images_credits',
	{
		imageId: nanoid('image_id').references(() => projectsImages.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		creditDetailsId: nanoid('credit_details_id').references(() => projectsImagesCreditDetails.id, {
			onDelete: 'set null',
			onUpdate: 'cascade',
		}),
		legend: text('legend'),
	},
	(table) => {
		return {
			pk: primaryKey(table.imageId, table.creditDetailsId),
		};
	}
);

/**
 * Keeping track of publication requests.
 */
export const projectsPublicationRequests = pgTable('projects_publication_requests', {
	projectId: nanoid('project_id')
		.references(() => projects.id, { onDelete: 'cascade', onUpdate: 'cascade' })
		.primaryKey(),
	requestedAt: timestamp('requested_at', { withTimezone: true }).defaultNow().notNull(),
	requestedById: userIdForeignKey('requested_by_id').notNull(),
});

/**
 * Sharing projects access to non-creator users.
 */
export const projectsUsers = pgTable(
	'projects_users',
	{
		userId: userIdForeignKey('user_id'),
		projectId: nanoid('project_id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		role: userRole('role')
			.references(() => userRoles.role, {
				onDelete: 'set default',
				onUpdate: 'cascade',
			})
			.default(USER_ROLES.VISITOR),
	},
	(table) => {
		return {
			pk: primaryKey(table.projectId, table.userId),
		};
	}
);

/**
 * Organizations credited as partakers in projects.
 */
export const projectsOrganizations = pgTable(
	'projects_organizations',
	{
		projectId: nanoid('project_id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		organizationId: nanoid('organization_id').references(() => organizations.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
	},
	(table) => {
		return {
			pk: primaryKey(table.organizationId, table.projectId),
		};
	}
);

/**
 * Global tally of projects likes.
 */
export const projectsLikes = pgTable(
	'projects_likes',
	{
		userId: userIdForeignKey('user_id'),
		projectId: nanoid('project_id').references(() => projects.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
	},
	(table) => {
		return {
			pk: primaryKey(table.projectId, table.userId),
		};
	}
);

//
// Organization descriptors
//

/**
 * Formats or domains of operation that can caracterize registered organizations.
 */
export const organizationTypes = pgTable('organization_types', {
	id: identity('id').primaryKey(),
});

/**
 * @see {@link organizationTypes}
 */
export const organizationTypesTranslations = pgTable(
	'organization_types_t',
	{
		id: integer('id').references(() => organizationTypes.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

/**
 * Professions heralded by design offices or communities.
 */
export const organizationExpertises = pgTable('organization_expertises', {
	id: identity('id').primaryKey(),
});

/**
 * @see {@link organizationExpertises}
 */
export const organizationExpertisesTranslations = pgTable(
	'organization_expertises_t',
	{
		id: integer('id').references(() => organizationExpertises.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

/**
 * Roles organizations can assume in the context of projects.
 */
export const organizationDuties = pgTable('organization_duties', {
	id: identity('id').primaryKey(),
});

/**
 * @see {@link organizationDuties}
 */
export const organizationDutiesTranslations = pgTable(
	'organization_duties_t',
	{
		id: integer('id').references(() => organizationDuties.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		title: text('title').notNull(),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
		};
	}
);

//
// Organizations
//

/**
 * Design offices, municipal offices, communities, etc.
 */
export const organizations = pgTable('organizations', {
	id: nanoid('id').default(generateNanoid()).primaryKey(),
	createdById: userIdForeignKey('created_by_id', {
		onDelete: 'restrict',
		onUpdate: 'cascade',
	}).notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	updatedById: userIdForeignKey('updated_by_id', { onDelete: 'set null', onUpdate: 'cascade' }),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
	typeId: integer('type_id').references(() => organizationTypes.id, {
		onDelete: 'set null',
		onUpdate: 'cascade',
	}),
});

/**
 * @see {@link organizations}
 */
export const organizationsTranslations = pgTable(
	'organizations_t',
	{
		id: nanoid('id').references(() => organizations.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		locale: locale('locale').references(() => locales.locale, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		name: text('name').notNull(),
		summary: text('summary'),
		description: text('description'),
	},
	(table) => {
		return {
			pk: primaryKey(table.id, table.locale),
			unq: unique().on(table.name, table.locale),
		};
	}
);

export const organizationsUsers = pgTable(
	'organizations_users',
	{
		organizationId: nanoid('organization_id').references(() => organizations.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		userId: userIdForeignKey('user_id'),
	},
	(table) => {
		return {
			pk: primaryKey(table.organizationId, table.userId),
		};
	}
);

export const organizationsExpertises = pgTable(
	'organizations_expertises',
	{
		organizationId: nanoid('organization_id').references(() => organizations.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
		expertiseId: integer('expertise_id').references(() => organizationExpertises.id, {
			onDelete: 'cascade',
			onUpdate: 'cascade',
		}),
	},
	(table) => {
		return {
			pk: primaryKey(table.expertiseId, table.organizationId),
		};
	}
);
