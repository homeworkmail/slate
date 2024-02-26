"use client";
import { createWorkspace } from "@/actions/create-workspace";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

function CreateWorkspacePage() {
  const router = useRouter();

  const { execute, fieldErrors, isLoading } = useAction(createWorkspace, {
    onSuccess: (data) => {
      toast.success(`${data.name} created.`);
      router.push(`/app/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const submit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="p-8 border-700 border-[1px] rounded-lg shadow-md space-y-6 md:w-1/3 w-4/5">
        <h1 className="md:text-3xl text-xl font-bold dark:text-zinc-300 text-zinc-700">
          Create Workspace
        </h1>
        <form action={submit} className="space-y-6">
          <FormInput
            errors={fieldErrors}
            id="title"
            disabled={isLoading}
            type="text"
            className="bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
            placeholder="Enter title..."
            label="Title"
          />
          <div>
            <FormSubmit disabled={isLoading}>Create workspace</FormSubmit>
            {isLoading && <Loader2 />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateWorkspacePage;
