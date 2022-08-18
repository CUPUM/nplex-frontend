-- CUSTOM TYPES
create type public.user_role as enum ('admin', 'editor', 'visitor');

create type public.publication_status as enum (
	'unpublished',
	'pending_approval',
	'refused_approval',
	'published'
);

-- PROJECT TYPE LIST
create table public.project_type (
	id int2 generated by default as identity primary key unique,
	title text not null,
	description text
);

insert into public.project_type (title, description)
values ('Nouvelle construction', ''),
	('Transformation', '');

-- PLACE OWNERSHIP LIST
create table public.project_site_ownership (
	id int2 generated by default as identity primary key unique,
	title text not null,
	description text
);

insert into public.project_site_ownership (title, description)
values ('Particulier', ''),
	('Organisme communautaire', ''),
	('Entreprise', ''),
	('Gouvernment', '');

-- PLACE USAGE CATEGORY LIST
create table public.project_site_usage_category (
	id int2 generated by default as identity primary key unique,
	title text not null,
	description text
);

insert into public.project_site_usage_category (title, description)
values ('Résidentiel', ''),
	('Communautaire', ''),
	('Commercial', ''),
	('Industriel', '');

-- PLACE USAGE LIST
create table public.project_site_usage (
	id int2 generated by default as identity primary key unique,
	title text not null,
	description text
);

insert into public.project_site_usage (title, description)
values ('Unifamilial', ''),
	('Duplex', ''),
	('Triplex', ''),
	('Quadruplex', ''),
	('Quintuplex', ''),
	('Sixplex', ''),
	('Bloc d’appartements', ''),
	('Condos', 'Co-propriété divise');

create table public.project_site_usage_by_category (
	id int2 generated by default as identity,
	usage_id int2 references public.project_site_usage on delete cascade not null primary key,
	category_id int2 references public.project_site_usage_category on delete cascade not null primary key,
	unique (usage_id, category_id)
);

-- USERS PROFILES
create table public.users_profiles (
	user_id uuid references auth.users on delete cascade not null primary key unique,
	created_at timestamptz default timezone('utc'::text, now()) not null,
	updated_at timestamptz default timezone('utc'::text, now()) not null,
	is_online boolean not null default false,
	published_email text,
	avatar_url text,
	firstname text,
	middlename text,
	lastname text,
	about text
);

comment on table public.users_profiles is 'Base data table for user profiles, extending the default supabase auth.users table.';

-- SECURED USERS ROLES
create table public.users_roles (
	user_id uuid references public.users_profiles on delete cascade not null primary key unique,
	updated_at timestamptz default timezone('utc'::text, now()) not null,
	role public.user_role default 'visitor' not null
);

comment on table public.users_roles is 'Table for controlled access to users roles.';

-- PROJECTS
create table public.projects (
	id uuid not null primary key unique default uuid_generate_v4(),
	created_at timestamptz not null default timezone('utc'::text, now()),
	updated_at timestamptz not null default timezone('utc'::text, now()),
	created_by_id uuid references public.users_profiles default auth.uid() not null,
	updated_by_id uuid references public.users_profiles default auth.uid() not null,
	is_published boolean not null default false,
	title text not null unique,
	description text,
	site_ownership_id int2 references public.project_site_ownership_list,
	main_site_usage_category_id int2 references public.project_site_usage_category_list,
	main_site_usage_id int2 references public.project_site_usage_list,
	site_area numeric,
	project_area numeric,
	adjacent_streets smallint,
	location_geometry geometry,
	ratings_n int not null default 0,
	ratings_average float
);

comment on table public.projects is 'Main table for projects.';

-- PROJECTS PUBLICATION STATUS
create table public.projects_publication_status (
	project_id uuid references public.projects on delete cascade not null primary key unique,
	updated_at timestamptz default timezone('utc'::text, now()) not null,
	updated_by_id uuid references public.users_profiles not null,
	status publication_status default 'unpublished' not null
);

comment on table public.projects_publication_status is 'Table for managing projects publication status through limited access.';

-- PROJECTS EDITORS
create table public.projects_editors (
	id int generated by default as identity primary key unique,
	project_id uuid references public.projects on delete cascade not null,
	user_id uuid references public.users_profiles on delete cascade not null,
	unique (project_id, user_id)
);

comment on table public.projects_editors is 'Table for managing editing rights on a per-project basis for non-creators.';

-- PROJECTS RATINGS
-- Look into aggregate functions for average total ratings and etc.: https://www.postgresql.org/docs/current/tutorial-agg.html
create table public.projects_ratings (
	id int generated by default as identity primary key unique,
	user_id uuid references public.users_profiles on delete cascade not null,
	project_id uuid references public.projects on delete cascade not null,
	rating numeric(2, 1),
	unique (project_id, user_id)
);

-- USERS PROJECTS COLLECTIONS
create table public.users_projects_collections (
	id uuid default uuid_generate_v4() primary key unique,
	created_at timestamptz default timezone('utc'::text, now()) not null,
	updated_at timestamptz default timezone('utc'::text, now()) not null,
	user_id uuid references public.users_profiles on delete cascade not null,
	is_published boolean default true not null,
	title text not null,
	description text
);

-- USERS PROJECTS COLLECTIONS ITEMS
create table public.users_projects_collections_items (
	id int generated by default as identity primary key unique,
	user_id uuid references public.users_profiles on delete cascade not null,
	created_at timestamptz default timezone('utc'::text, now()) not null,
	collection_id uuid references public.users_projects_collections on delete cascade not null,
	project_id uuid references public.projects on delete cascade not null
);