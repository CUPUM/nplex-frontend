-- 
-- Set search paths
-- (somehow unset at some point, which breaks latter migrations since the generation omits schema names when calling procedures or tables...)
-- 

set search_path to public,auth,extensions;

-- 
-- Initial tables
-- 

create table "public"."project_category" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text
);

create table "public"."project_event_type_subevent_type" (
    "id" smallint generated by default as identity not null,
    "event_type_id" smallint not null,
    "subevent_type_id" smallint not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_event_type" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text,
    "durative" boolean not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_exemplarity_indicator" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text,
    "category_id" smallint,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_exemplarity_indicator_category" (
    "id" smallint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "title" text not null,
    "description" text,
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_implantation_mode" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text
);

create table "public"."project_material_origin" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "label" text not null,
    "description" text
);

create table "public"."project_material_type" (
    "id" integer generated by default as identity not null,
    "title" text not null,
    "description" text,
    "combustible" boolean not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_material_use" (
    "id" integer generated by default as identity not null,
    "title" text not null,
    "description" text,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_site_ownership" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text
);

create table "public"."project_site_usage" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text,
    "is_building" boolean not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_site_usage_category" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text
);

create table "public"."project_site_usage_site_usage_category" (
    "id" smallint generated by default as identity not null,
    "usage_id" smallint not null,
    "category_id" smallint not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_type" (
    "id" smallint generated by default as identity not null,
    "title" text not null,
    "description" text,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."project_type_category" (
    "category_id" smallint not null,
    "type_id" smallint not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."projects" (
    "id" uuid not null default  extensions.uuid_generate_v4(),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid(),
    "title" text not null,
    "description" text,
    "site_ownership_id" smallint,
    "site_usage_category_id" smallint,
    "site_usage_id" smallint,
    "site_area" numeric,
    "category_id" smallint,
    "area" numeric,
    "adjacent_streets" smallint,
    "location_geometry" postgis.geometry,
    "building_area" numeric,
    "implantation_mode_id" smallint,
    "building_construction_year" smallint,
    "cost_min" integer,
    "cost_max" integer,
    "type_id" smallint,
    "combustible" boolean,
    "banner_url" text
);

create table "public"."projects_events" (
    "id" uuid not null default  extensions.uuid_generate_v4(),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid(),
    "project_id" uuid not null,
    "type_id" smallint not null,
    "parent_id" uuid,
    "title" text not null,
    "description" text,
    "start_date" timestamp with time zone not null,
    "end_date" timestamp with time zone
);

create table "public"."projects_events_ressources" (
    "id" uuid not null default  extensions.uuid_generate_v4(),
    "event_id" uuid not null,
    "project_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid(),
    "title" text not null,
    "description" text,
    "url" text
);

create table "public"."projects_exemplarity_indicators" (
    "id" uuid not null default  extensions.uuid_generate_v4(),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid(),
    "project_id" uuid not null,
    "exemplarity_indicator_id" smallint not null,
    "description" text
);

create table "public"."projects_likes_sums" (
    "project_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "sum" integer not null default 0
);

create table "public"."projects_materials" (
    "id" uuid not null default  extensions.uuid_generate_v4(),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid(),
    "project_id" uuid not null,
    "material_type_id" integer not null,
    "origin_id" smallint,
    "sustainability" numeric(1,1),
    "description" text
);

create table "public"."projects_materials_uses" (
    "id" integer generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid(),
    "project_id" uuid not null,
    "project_material_id" uuid not null,
    "material_use_id" integer not null,
    "description" text
);

create table "public"."projects_programs" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid(),
    "project_id" uuid not null,
    "title" text not null,
    "description" text
);

create table "public"."projects_publication_status" (
    "project_id" uuid not null,
    "updated_at" timestamp with time zone not null default now(),
    "updated_by_id" uuid not null default public.default_uid(),
    "status" public.publication_status not null default 'unpublished'::public.publication_status,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid()
);

create table "public"."projects_users" (
    "project_id" uuid not null,
    "user_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "granted_role" public.user_role not null default 'editor'::public.user_role,
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default public.default_uid(),
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."users_profiles" (
    "user_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "avatar_url" text,
    "firstname" text,
    "middlename" text,
    "lastname" text,
    "about" text,
    "public_email" text,
    "updated_by_id" uuid default public.default_uid()
);

create table "public"."users_projects_collections" (
    "id" uuid not null default  extensions.uuid_generate_v4(),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "created_by_id" uuid not null default auth.uid(),
    "is_public" boolean not null default true,
    "title" text not null,
    "description" text,
    "updated_by_id" uuid not null default auth.uid()
);

create table "public"."users_projects_collections_items" (
    "id" integer generated by default as identity not null,
    "created_by_id" uuid not null default auth.uid(),
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "collection_id" uuid not null,
    "project_id" uuid not null,
    "description" text,
    "updated_by_id" uuid not null default public.default_uid()
);

create table "public"."users_projects_likes" (
    "id" integer generated by default as identity not null,
    "user_id" uuid not null default auth.uid(),
    "project_id" uuid not null,
    "created_at" timestamp with time zone not null default now()
);

create table "public"."users_roles" (
    "user_id" uuid not null,
    "updated_at" timestamp with time zone not null default now(),
    "role" public.user_role not null default 'visitor'::public.user_role,
    "updated_by_id" uuid default public.default_uid()
);

