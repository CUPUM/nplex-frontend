set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.add_project_gallery_image()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
	begin
	if (new.bucket_id = 'projects') and ((storage.foldername(new.name))[2] = 'gallery')
	then
		insert into public.projects_gallery_images as g (name, project_id, updated_by_id, created_by_id, file_names)
        values ((storage.foldername(new.name))[3]::text, (storage.foldername(new.name))[1]::uuid, auth.uid(), auth.uid(), array[new.name])
        on conflict (name) do update set
        file_names = array_append(g.file_names, new.name);
end if;

return new;
end;

$function$
;


