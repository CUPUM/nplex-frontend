CREATE SCHEMA "auth";
--> statement-breakpoint
CREATE SCHEMA "i18n";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."email_verification_tokens" (
	"id" text NOT NULL,
	"expires" bigint PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	CONSTRAINT "email_verification_tokens_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."auth_keys" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"hashed_password" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."auth_sessions" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"active_expires" bigint NOT NULL,
	"idle_expires" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."user_occupations" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."user_occupations_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT user_occupations_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."user_roles" (
	"role" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."user_roles_t" (
	"role" text,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT user_roles_t_role_locale PRIMARY KEY("role","locale"),
	CONSTRAINT "user_roles_t_locale_title_unique" UNIQUE("locale","title")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users" (
	"id" varchar(15) PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"role" text DEFAULT 'visitor' NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"public_email" text,
	"public_email_verified" boolean DEFAULT false NOT NULL,
	"first_name" text,
	"middle_name" text,
	"last_name" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users_occupations" (
	"user_id" varchar(15) NOT NULL,
	"occupation_id" serial NOT NULL,
	CONSTRAINT users_occupations_occupation_id_user_id PRIMARY KEY("occupation_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users_projects_collections" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(15) NOT NULL,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT "users_projects_collections_title_user_id_unique" UNIQUE("title","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users_collections_items" (
	"collection_id" uuid,
	"project_id" uuid,
	"note" text,
	CONSTRAINT users_collections_items_collection_id_project_id PRIMARY KEY("collection_id","project_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users_roles_requests" (
	"user_id" varchar(15) PRIMARY KEY NOT NULL,
	"requested_role" text,
	"requested_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "i18n"."locales" (
	"locale" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "locales_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_duties" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_duties_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT organization_duties_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_expertises" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_expertises_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT organization_expertises_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_types" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organization_types_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT organization_types_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_by_id" varchar(15) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_by_id" varchar(15),
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"type_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizations_expertises" (
	"organization_id" uuid,
	"expertise_id" serial NOT NULL,
	CONSTRAINT organizations_expertises_expertise_id_organization_id PRIMARY KEY("expertise_id","organization_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizations_t" (
	"id" uuid,
	"locale" text,
	"name" text NOT NULL,
	"summary" text,
	"description" text,
	CONSTRAINT organizations_t_id_locale PRIMARY KEY("id","locale"),
	CONSTRAINT "organizations_t_name_locale_unique" UNIQUE("name","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizations_users" (
	"organization_id" uuid,
	"user_id" varchar(15),
	CONSTRAINT organizations_users_organization_id_user_id PRIMARY KEY("organization_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_exemplarity_categories" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_exemplarity_categories_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_exemplarity_categories_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_exemplarity_indicators" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_exemplarity_indicators_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"short_title" text NOT NULL,
	"description" text,
	CONSTRAINT project_exemplarity_indicators_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_image_temporalities" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_image_temporalities_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_image_temporalities_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_image_types" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_image_types_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_image_types_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_implantation_types" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_implantation_types_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_implantation_types_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_intervention_categories" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_intervention_categories_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_intervention_categories_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_intervention_types" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_intervention_types_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_intervention_types_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_site_ownerships" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_site_ownerships_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_site_ownerships_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_types" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_types_to_intervention_types" (
	"type_id" serial NOT NULL,
	"intervention_type_id" serial NOT NULL,
	CONSTRAINT project_types_to_intervention_types_type_id_intervention_type_id PRIMARY KEY("type_id","intervention_type_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_types_t" (
	"id" serial NOT NULL,
	"locale" text,
	"title" text NOT NULL,
	"description" text,
	CONSTRAINT project_types_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by_id" varchar(15) NOT NULL,
	"updated_by_id" varchar(15),
	"published_at" timestamp with time zone,
	"likes_count" integer DEFAULT 0 NOT NULL,
	"type_id" serial NOT NULL,
	"site_ownership_id" serial NOT NULL,
	"implantation_type_id" serial NOT NULL,
	"adjacent_streets" integer,
	"adjacent_alleys" integer,
	"cost_range" "int4"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_exemplarity_indicators" (
	"project_id" uuid,
	"exemplarity_indicator_id" serial NOT NULL,
	CONSTRAINT projects_exemplarity_indicators_project_id_exemplarity_indicator_id PRIMARY KEY("project_id","exemplarity_indicator_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by_id" varchar(15) NOT NULL,
	"updated_by_id" varchar(15),
	"index" integer NOT NULL,
	"public_url" text NOT NULL,
	"storage_name" text NOT NULL,
	"type_id" serial NOT NULL,
	"temporality_id" serial NOT NULL,
	CONSTRAINT "projects_images_project_id_index_unique" UNIQUE("project_id","index")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_images_credits" (
	"image_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_images_t" (
	"id" uuid,
	"locale" text,
	"description" text,
	CONSTRAINT projects_images_t_id_locale PRIMARY KEY("id","locale")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_interventions" (
	"project_id" uuid,
	"intervention_type_id" serial NOT NULL,
	CONSTRAINT projects_interventions_project_id_intervention_type_id PRIMARY KEY("project_id","intervention_type_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_likes" (
	"user_id" varchar(15),
	"project_id" uuid,
	CONSTRAINT projects_likes_project_id_user_id PRIMARY KEY("project_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_organizations" (
	"project_id" uuid,
	"organization_id" uuid,
	CONSTRAINT projects_organizations_organization_id_project_id PRIMARY KEY("organization_id","project_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_publication_requests" (
	"project_id" uuid PRIMARY KEY NOT NULL,
	"requested_at" timestamp with time zone DEFAULT now() NOT NULL,
	"requested_by_id" varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_t" (
	"id" uuid,
	"locale" text,
	"title" text NOT NULL,
	"summary" text,
	"description" text,
	CONSTRAINT projects_t_id_locale PRIMARY KEY("id","locale"),
	CONSTRAINT "projects_t_locale_title_unique" UNIQUE("locale","title")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_users" (
	"user_id" varchar(15),
	"project_id" uuid,
	"role" text DEFAULT 'visitor',
	CONSTRAINT projects_users_project_id_user_id PRIMARY KEY("project_id","user_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."email_verification_tokens" ADD CONSTRAINT "email_verification_tokens_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."auth_keys" ADD CONSTRAINT "auth_keys_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."auth_sessions" ADD CONSTRAINT "auth_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."user_occupations_t" ADD CONSTRAINT "user_occupations_t_id_user_occupations_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."user_occupations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."user_occupations_t" ADD CONSTRAINT "user_occupations_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."user_roles_t" ADD CONSTRAINT "user_roles_t_role_user_roles_role_fk" FOREIGN KEY ("role") REFERENCES "auth"."user_roles"("role") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."user_roles_t" ADD CONSTRAINT "user_roles_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users" ADD CONSTRAINT "users_role_user_roles_role_fk" FOREIGN KEY ("role") REFERENCES "auth"."user_roles"("role") ON DELETE set default ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_occupations" ADD CONSTRAINT "users_occupations_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_occupations" ADD CONSTRAINT "users_occupations_occupation_id_user_occupations_id_fk" FOREIGN KEY ("occupation_id") REFERENCES "auth"."user_occupations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_projects_collections" ADD CONSTRAINT "users_projects_collections_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_collections_items" ADD CONSTRAINT "users_collections_items_collection_id_users_projects_collections_id_fk" FOREIGN KEY ("collection_id") REFERENCES "auth"."users_projects_collections"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_collections_items" ADD CONSTRAINT "users_collections_items_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_roles_requests" ADD CONSTRAINT "users_roles_requests_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth"."users_roles_requests" ADD CONSTRAINT "users_roles_requests_requested_role_user_roles_role_fk" FOREIGN KEY ("requested_role") REFERENCES "auth"."user_roles"("role") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_duties_t" ADD CONSTRAINT "organization_duties_t_id_organization_duties_id_fk" FOREIGN KEY ("id") REFERENCES "organization_duties"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_duties_t" ADD CONSTRAINT "organization_duties_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_expertises_t" ADD CONSTRAINT "organization_expertises_t_id_organization_expertises_id_fk" FOREIGN KEY ("id") REFERENCES "organization_expertises"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_expertises_t" ADD CONSTRAINT "organization_expertises_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_types_t" ADD CONSTRAINT "organization_types_t_id_organization_types_id_fk" FOREIGN KEY ("id") REFERENCES "organization_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organization_types_t" ADD CONSTRAINT "organization_types_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations" ADD CONSTRAINT "organizations_created_by_id_users_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "auth"."users"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations" ADD CONSTRAINT "organizations_updated_by_id_users_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "auth"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations" ADD CONSTRAINT "organizations_type_id_organization_types_id_fk" FOREIGN KEY ("type_id") REFERENCES "organization_types"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations_expertises" ADD CONSTRAINT "organizations_expertises_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations_expertises" ADD CONSTRAINT "organizations_expertises_expertise_id_organization_expertises_id_fk" FOREIGN KEY ("expertise_id") REFERENCES "organization_expertises"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations_t" ADD CONSTRAINT "organizations_t_id_organizations_id_fk" FOREIGN KEY ("id") REFERENCES "organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations_t" ADD CONSTRAINT "organizations_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations_users" ADD CONSTRAINT "organizations_users_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organizations_users" ADD CONSTRAINT "organizations_users_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_exemplarity_categories_t" ADD CONSTRAINT "project_exemplarity_categories_t_id_project_exemplarity_categories_id_fk" FOREIGN KEY ("id") REFERENCES "project_exemplarity_categories"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_exemplarity_categories_t" ADD CONSTRAINT "project_exemplarity_categories_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_exemplarity_indicators" ADD CONSTRAINT "project_exemplarity_indicators_category_id_project_exemplarity_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "project_exemplarity_categories"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_exemplarity_indicators_t" ADD CONSTRAINT "project_exemplarity_indicators_t_id_project_exemplarity_indicators_id_fk" FOREIGN KEY ("id") REFERENCES "project_exemplarity_indicators"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_exemplarity_indicators_t" ADD CONSTRAINT "project_exemplarity_indicators_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_image_temporalities_t" ADD CONSTRAINT "project_image_temporalities_t_id_project_image_temporalities_id_fk" FOREIGN KEY ("id") REFERENCES "project_image_temporalities"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_image_temporalities_t" ADD CONSTRAINT "project_image_temporalities_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_image_types_t" ADD CONSTRAINT "project_image_types_t_id_project_image_types_id_fk" FOREIGN KEY ("id") REFERENCES "project_image_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_image_types_t" ADD CONSTRAINT "project_image_types_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_implantation_types_t" ADD CONSTRAINT "project_implantation_types_t_id_project_implantation_types_id_fk" FOREIGN KEY ("id") REFERENCES "project_implantation_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_implantation_types_t" ADD CONSTRAINT "project_implantation_types_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_intervention_categories_t" ADD CONSTRAINT "project_intervention_categories_t_id_project_intervention_categories_id_fk" FOREIGN KEY ("id") REFERENCES "project_intervention_categories"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_intervention_categories_t" ADD CONSTRAINT "project_intervention_categories_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_intervention_types_t" ADD CONSTRAINT "project_intervention_types_t_id_project_intervention_types_id_fk" FOREIGN KEY ("id") REFERENCES "project_intervention_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_intervention_types_t" ADD CONSTRAINT "project_intervention_types_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_site_ownerships_t" ADD CONSTRAINT "project_site_ownerships_t_id_project_site_ownerships_id_fk" FOREIGN KEY ("id") REFERENCES "project_site_ownerships"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_site_ownerships_t" ADD CONSTRAINT "project_site_ownerships_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_types_to_intervention_types" ADD CONSTRAINT "project_types_to_intervention_types_type_id_project_types_id_fk" FOREIGN KEY ("type_id") REFERENCES "project_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_types_to_intervention_types" ADD CONSTRAINT "project_types_to_intervention_types_intervention_type_id_project_types_id_fk" FOREIGN KEY ("intervention_type_id") REFERENCES "project_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_types_t" ADD CONSTRAINT "project_types_t_id_project_types_id_fk" FOREIGN KEY ("id") REFERENCES "project_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_types_t" ADD CONSTRAINT "project_types_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_created_by_id_users_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "auth"."users"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_updated_by_id_users_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "auth"."users"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_type_id_project_types_id_fk" FOREIGN KEY ("type_id") REFERENCES "project_types"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_site_ownership_id_project_site_ownerships_id_fk" FOREIGN KEY ("site_ownership_id") REFERENCES "project_site_ownerships"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_implantation_type_id_project_implantation_types_id_fk" FOREIGN KEY ("implantation_type_id") REFERENCES "project_implantation_types"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_exemplarity_indicators" ADD CONSTRAINT "projects_exemplarity_indicators_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_exemplarity_indicators" ADD CONSTRAINT "projects_exemplarity_indicators_exemplarity_indicator_id_project_exemplarity_indicators_id_fk" FOREIGN KEY ("exemplarity_indicator_id") REFERENCES "project_exemplarity_indicators"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_created_by_id_users_id_fk" FOREIGN KEY ("created_by_id") REFERENCES "auth"."users"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_updated_by_id_users_id_fk" FOREIGN KEY ("updated_by_id") REFERENCES "auth"."users"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_type_id_project_image_types_id_fk" FOREIGN KEY ("type_id") REFERENCES "project_image_types"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images" ADD CONSTRAINT "projects_images_temporality_id_project_image_temporalities_id_fk" FOREIGN KEY ("temporality_id") REFERENCES "project_image_temporalities"("id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images_t" ADD CONSTRAINT "projects_images_t_id_projects_images_id_fk" FOREIGN KEY ("id") REFERENCES "projects_images"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_images_t" ADD CONSTRAINT "projects_images_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_interventions" ADD CONSTRAINT "projects_interventions_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_interventions" ADD CONSTRAINT "projects_interventions_intervention_type_id_project_intervention_types_id_fk" FOREIGN KEY ("intervention_type_id") REFERENCES "project_intervention_types"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_likes" ADD CONSTRAINT "projects_likes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_likes" ADD CONSTRAINT "projects_likes_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_organizations" ADD CONSTRAINT "projects_organizations_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_organizations" ADD CONSTRAINT "projects_organizations_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_publication_requests" ADD CONSTRAINT "projects_publication_requests_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_publication_requests" ADD CONSTRAINT "projects_publication_requests_requested_by_id_users_id_fk" FOREIGN KEY ("requested_by_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_t" ADD CONSTRAINT "projects_t_id_projects_id_fk" FOREIGN KEY ("id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_t" ADD CONSTRAINT "projects_t_locale_locales_locale_fk" FOREIGN KEY ("locale") REFERENCES "i18n"."locales"("locale") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_users" ADD CONSTRAINT "projects_users_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_users" ADD CONSTRAINT "projects_users_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_users" ADD CONSTRAINT "projects_users_role_user_roles_role_fk" FOREIGN KEY ("role") REFERENCES "auth"."user_roles"("role") ON DELETE set default ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;