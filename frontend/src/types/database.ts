/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.profiles.user_id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          is_online?: parameters["rowFilter.profiles.is_online"];
          show_email?: parameters["rowFilter.profiles.show_email"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          firstname?: parameters["rowFilter.profiles.firstname"];
          middlename?: parameters["rowFilter.profiles.middlename"];
          lastname?: parameters["rowFilter.profiles.lastname"];
          about?: parameters["rowFilter.profiles.about"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.profiles.user_id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          is_online?: parameters["rowFilter.profiles.is_online"];
          show_email?: parameters["rowFilter.profiles.show_email"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          firstname?: parameters["rowFilter.profiles.firstname"];
          middlename?: parameters["rowFilter.profiles.middlename"];
          lastname?: parameters["rowFilter.profiles.lastname"];
          about?: parameters["rowFilter.profiles.about"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.profiles.user_id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          is_online?: parameters["rowFilter.profiles.is_online"];
          show_email?: parameters["rowFilter.profiles.show_email"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          firstname?: parameters["rowFilter.profiles.firstname"];
          middlename?: parameters["rowFilter.profiles.middlename"];
          lastname?: parameters["rowFilter.profiles.lastname"];
          about?: parameters["rowFilter.profiles.about"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/projects": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          created_at?: parameters["rowFilter.projects.created_at"];
          updated_at?: parameters["rowFilter.projects.updated_at"];
          created_by_id?: parameters["rowFilter.projects.created_by_id"];
          updated_by_id?: parameters["rowFilter.projects.updated_by_id"];
          is_published?: parameters["rowFilter.projects.is_published"];
          title?: parameters["rowFilter.projects.title"];
          description?: parameters["rowFilter.projects.description"];
          ratings_n?: parameters["rowFilter.projects.ratings_n"];
          ratings_average?: parameters["rowFilter.projects.ratings_average"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          created_at?: parameters["rowFilter.projects.created_at"];
          updated_at?: parameters["rowFilter.projects.updated_at"];
          created_by_id?: parameters["rowFilter.projects.created_by_id"];
          updated_by_id?: parameters["rowFilter.projects.updated_by_id"];
          is_published?: parameters["rowFilter.projects.is_published"];
          title?: parameters["rowFilter.projects.title"];
          description?: parameters["rowFilter.projects.description"];
          ratings_n?: parameters["rowFilter.projects.ratings_n"];
          ratings_average?: parameters["rowFilter.projects.ratings_average"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          created_at?: parameters["rowFilter.projects.created_at"];
          updated_at?: parameters["rowFilter.projects.updated_at"];
          created_by_id?: parameters["rowFilter.projects.created_by_id"];
          updated_by_id?: parameters["rowFilter.projects.updated_by_id"];
          is_published?: parameters["rowFilter.projects.is_published"];
          title?: parameters["rowFilter.projects.title"];
          description?: parameters["rowFilter.projects.description"];
          ratings_n?: parameters["rowFilter.projects.ratings_n"];
          ratings_average?: parameters["rowFilter.projects.ratings_average"];
        };
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/projects_editors": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects_editors.id"];
          project_id?: parameters["rowFilter.projects_editors.project_id"];
          user_id?: parameters["rowFilter.projects_editors.user_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects_editors"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects_editors */
          projects_editors?: definitions["projects_editors"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects_editors.id"];
          project_id?: parameters["rowFilter.projects_editors.project_id"];
          user_id?: parameters["rowFilter.projects_editors.user_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects_editors.id"];
          project_id?: parameters["rowFilter.projects_editors.project_id"];
          user_id?: parameters["rowFilter.projects_editors.user_id"];
        };
        body: {
          /** projects_editors */
          projects_editors?: definitions["projects_editors"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/projects_publication_status": {
    get: {
      parameters: {
        query: {
          project_id?: parameters["rowFilter.projects_publication_status.project_id"];
          updated_at?: parameters["rowFilter.projects_publication_status.updated_at"];
          updated_by_id?: parameters["rowFilter.projects_publication_status.updated_by_id"];
          status?: parameters["rowFilter.projects_publication_status.status"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects_publication_status"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects_publication_status */
          projects_publication_status?: definitions["projects_publication_status"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          project_id?: parameters["rowFilter.projects_publication_status.project_id"];
          updated_at?: parameters["rowFilter.projects_publication_status.updated_at"];
          updated_by_id?: parameters["rowFilter.projects_publication_status.updated_by_id"];
          status?: parameters["rowFilter.projects_publication_status.status"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          project_id?: parameters["rowFilter.projects_publication_status.project_id"];
          updated_at?: parameters["rowFilter.projects_publication_status.updated_at"];
          updated_by_id?: parameters["rowFilter.projects_publication_status.updated_by_id"];
          status?: parameters["rowFilter.projects_publication_status.status"];
        };
        body: {
          /** projects_publication_status */
          projects_publication_status?: definitions["projects_publication_status"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/projects_ratings": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects_ratings.id"];
          user_id?: parameters["rowFilter.projects_ratings.user_id"];
          project_id?: parameters["rowFilter.projects_ratings.project_id"];
          rating?: parameters["rowFilter.projects_ratings.rating"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects_ratings"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects_ratings */
          projects_ratings?: definitions["projects_ratings"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects_ratings.id"];
          user_id?: parameters["rowFilter.projects_ratings.user_id"];
          project_id?: parameters["rowFilter.projects_ratings.project_id"];
          rating?: parameters["rowFilter.projects_ratings.rating"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects_ratings.id"];
          user_id?: parameters["rowFilter.projects_ratings.user_id"];
          project_id?: parameters["rowFilter.projects_ratings.project_id"];
          rating?: parameters["rowFilter.projects_ratings.rating"];
        };
        body: {
          /** projects_ratings */
          projects_ratings?: definitions["projects_ratings"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users_projects_collections": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users_projects_collections.id"];
          created_at?: parameters["rowFilter.users_projects_collections.created_at"];
          updated_at?: parameters["rowFilter.users_projects_collections.updated_at"];
          user_id?: parameters["rowFilter.users_projects_collections.user_id"];
          is_published?: parameters["rowFilter.users_projects_collections.is_published"];
          title?: parameters["rowFilter.users_projects_collections.title"];
          description?: parameters["rowFilter.users_projects_collections.description"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users_projects_collections"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users_projects_collections */
          users_projects_collections?: definitions["users_projects_collections"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users_projects_collections.id"];
          created_at?: parameters["rowFilter.users_projects_collections.created_at"];
          updated_at?: parameters["rowFilter.users_projects_collections.updated_at"];
          user_id?: parameters["rowFilter.users_projects_collections.user_id"];
          is_published?: parameters["rowFilter.users_projects_collections.is_published"];
          title?: parameters["rowFilter.users_projects_collections.title"];
          description?: parameters["rowFilter.users_projects_collections.description"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users_projects_collections.id"];
          created_at?: parameters["rowFilter.users_projects_collections.created_at"];
          updated_at?: parameters["rowFilter.users_projects_collections.updated_at"];
          user_id?: parameters["rowFilter.users_projects_collections.user_id"];
          is_published?: parameters["rowFilter.users_projects_collections.is_published"];
          title?: parameters["rowFilter.users_projects_collections.title"];
          description?: parameters["rowFilter.users_projects_collections.description"];
        };
        body: {
          /** users_projects_collections */
          users_projects_collections?: definitions["users_projects_collections"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users_projects_collections_items": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users_projects_collections_items.id"];
          user_id?: parameters["rowFilter.users_projects_collections_items.user_id"];
          created_at?: parameters["rowFilter.users_projects_collections_items.created_at"];
          collection_id?: parameters["rowFilter.users_projects_collections_items.collection_id"];
          project_id?: parameters["rowFilter.users_projects_collections_items.project_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users_projects_collections_items"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users_projects_collections_items */
          users_projects_collections_items?: definitions["users_projects_collections_items"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users_projects_collections_items.id"];
          user_id?: parameters["rowFilter.users_projects_collections_items.user_id"];
          created_at?: parameters["rowFilter.users_projects_collections_items.created_at"];
          collection_id?: parameters["rowFilter.users_projects_collections_items.collection_id"];
          project_id?: parameters["rowFilter.users_projects_collections_items.project_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users_projects_collections_items.id"];
          user_id?: parameters["rowFilter.users_projects_collections_items.user_id"];
          created_at?: parameters["rowFilter.users_projects_collections_items.created_at"];
          collection_id?: parameters["rowFilter.users_projects_collections_items.collection_id"];
          project_id?: parameters["rowFilter.users_projects_collections_items.project_id"];
        };
        body: {
          /** users_projects_collections_items */
          users_projects_collections_items?: definitions["users_projects_collections_items"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users_roles": {
    get: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.users_roles.user_id"];
          updated_at?: parameters["rowFilter.users_roles.updated_at"];
          role?: parameters["rowFilter.users_roles.role"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users_roles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users_roles */
          users_roles?: definitions["users_roles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.users_roles.user_id"];
          updated_at?: parameters["rowFilter.users_roles.updated_at"];
          role?: parameters["rowFilter.users_roles.role"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.users_roles.user_id"];
          updated_at?: parameters["rowFilter.users_roles.updated_at"];
          role?: parameters["rowFilter.users_roles.role"];
        };
        body: {
          /** users_roles */
          users_roles?: definitions["users_roles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/user_has_role": {
    post: {
      parameters: {
        body: {
          args: {
            /** Format: public.user_role[] */
            roles: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  /** @description Base data table for user profiles, extending the default supabase auth.users table. */
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    user_id: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: boolean */
    is_online: boolean;
    /** Format: boolean */
    show_email: boolean;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    firstname?: string;
    /** Format: text */
    middlename?: string;
    /** Format: text */
    lastname?: string;
    /** Format: text */
    about?: string;
  };
  /** @description Main table for projects. */
  projects: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /**
     * Format: uuid
     * @default auth.uid()
     */
    created_by_id: string;
    /**
     * Format: uuid
     * @default auth.uid()
     */
    updated_by_id: string;
    /** Format: boolean */
    is_published: boolean;
    /** Format: text */
    title: string;
    /** Format: text */
    description?: string;
    /** Format: integer */
    ratings_n: number;
    /** Format: double precision */
    ratings_average?: number;
  };
  /** @description Table for managing editing rights on a per-project basis for non-creators. */
  projects_editors: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: integer
     * @description Note:
     * This is a Foreign Key to `projects.id`.<fk table='projects' column='id'/>
     */
    project_id: number;
    /** Format: uuid */
    user_id: string;
  };
  /** @description Table for managing projects publication status. */
  projects_publication_status: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `projects.id`.<fk table='projects' column='id'/>
     */
    project_id: number;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: uuid */
    updated_by_id: string;
    /**
     * Format: public.publication_status
     * @default unpublished
     * @enum {string}
     */
    status:
      | "unpublished"
      | "awaiting_approval"
      | "revoked_approval"
      | "published";
  };
  projects_ratings: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: uuid */
    user_id: string;
    /**
     * Format: integer
     * @description Note:
     * This is a Foreign Key to `projects.id`.<fk table='projects' column='id'/>
     */
    project_id: number;
    /** Format: numeric */
    rating?: number;
  };
  users_projects_collections: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    created_at: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /** Format: uuid */
    user_id: string;
    /**
     * Format: boolean
     * @default true
     */
    is_published: boolean;
    /** Format: text */
    title: string;
    /** Format: text */
    description?: string;
  };
  users_projects_collections_items: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: uuid */
    user_id: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    created_at: string;
    /**
     * Format: integer
     * @description Note:
     * This is a Foreign Key to `users_projects_collections.id`.<fk table='users_projects_collections' column='id'/>
     */
    collection_id: number;
    /**
     * Format: integer
     * @description Note:
     * This is a Foreign Key to `projects.id`.<fk table='projects' column='id'/>
     */
    project_id: number;
  };
  /** @description Table for controlled access to users roles. */
  users_roles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    user_id: string;
    /**
     * Format: timestamp with time zone
     * @default timezone('utc'::text, now())
     */
    updated_at: string;
    /**
     * Format: public.user_role
     * @default visitor
     * @enum {string}
     */
    role: "admin" | "editor" | "visitor";
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.user_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: boolean */
  "rowFilter.profiles.is_online": string;
  /** Format: boolean */
  "rowFilter.profiles.show_email": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.firstname": string;
  /** Format: text */
  "rowFilter.profiles.middlename": string;
  /** Format: text */
  "rowFilter.profiles.lastname": string;
  /** Format: text */
  "rowFilter.profiles.about": string;
  /** @description projects */
  "body.projects": definitions["projects"];
  /** Format: integer */
  "rowFilter.projects.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.projects.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.projects.updated_at": string;
  /** Format: uuid */
  "rowFilter.projects.created_by_id": string;
  /** Format: uuid */
  "rowFilter.projects.updated_by_id": string;
  /** Format: boolean */
  "rowFilter.projects.is_published": string;
  /** Format: text */
  "rowFilter.projects.title": string;
  /** Format: text */
  "rowFilter.projects.description": string;
  /** Format: integer */
  "rowFilter.projects.ratings_n": string;
  /** Format: double precision */
  "rowFilter.projects.ratings_average": string;
  /** @description projects_editors */
  "body.projects_editors": definitions["projects_editors"];
  /** Format: integer */
  "rowFilter.projects_editors.id": string;
  /** Format: integer */
  "rowFilter.projects_editors.project_id": string;
  /** Format: uuid */
  "rowFilter.projects_editors.user_id": string;
  /** @description projects_publication_status */
  "body.projects_publication_status": definitions["projects_publication_status"];
  /** Format: integer */
  "rowFilter.projects_publication_status.project_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.projects_publication_status.updated_at": string;
  /** Format: uuid */
  "rowFilter.projects_publication_status.updated_by_id": string;
  /** Format: public.publication_status */
  "rowFilter.projects_publication_status.status": string;
  /** @description projects_ratings */
  "body.projects_ratings": definitions["projects_ratings"];
  /** Format: integer */
  "rowFilter.projects_ratings.id": string;
  /** Format: uuid */
  "rowFilter.projects_ratings.user_id": string;
  /** Format: integer */
  "rowFilter.projects_ratings.project_id": string;
  /** Format: numeric */
  "rowFilter.projects_ratings.rating": string;
  /** @description users_projects_collections */
  "body.users_projects_collections": definitions["users_projects_collections"];
  /** Format: integer */
  "rowFilter.users_projects_collections.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.users_projects_collections.created_at": string;
  /** Format: timestamp with time zone */
  "rowFilter.users_projects_collections.updated_at": string;
  /** Format: uuid */
  "rowFilter.users_projects_collections.user_id": string;
  /** Format: boolean */
  "rowFilter.users_projects_collections.is_published": string;
  /** Format: text */
  "rowFilter.users_projects_collections.title": string;
  /** Format: text */
  "rowFilter.users_projects_collections.description": string;
  /** @description users_projects_collections_items */
  "body.users_projects_collections_items": definitions["users_projects_collections_items"];
  /** Format: integer */
  "rowFilter.users_projects_collections_items.id": string;
  /** Format: uuid */
  "rowFilter.users_projects_collections_items.user_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.users_projects_collections_items.created_at": string;
  /** Format: integer */
  "rowFilter.users_projects_collections_items.collection_id": string;
  /** Format: integer */
  "rowFilter.users_projects_collections_items.project_id": string;
  /** @description users_roles */
  "body.users_roles": definitions["users_roles"];
  /** Format: uuid */
  "rowFilter.users_roles.user_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.users_roles.updated_at": string;
  /** Format: public.user_role */
  "rowFilter.users_roles.role": string;
}

export interface operations {}

export interface external {}