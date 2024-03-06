"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormTextArea } from "@/components/form/form-textarea";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createSlip } from "@/actions/create-slip";
import { toast } from "sonner";
import { TableForm } from "./_components/table-form";
import { useRouter } from "next/navigation";

export type Data = {
  id: number;
  page: string;
  content: string;
}[];

function CreateSlipPage({ params }: { params: { wsId: string } }) {
  const router = useRouter();

  const {
    execute: ThoughtExecute,
    fieldErrors: ThoughtFieldErrors,
    isLoading: ThoughtIsLoading,
  } = useAction(createSlip, {
    onSuccess: (data) => {
      toast.success(`${data.title || data.type} is created.`);
      router.push(`/app/${params.wsId}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const {
    execute: BookExecute,
    fieldErrors: BookFieldErrors,
    isLoading: BookIsLoading,
  } = useAction(createSlip, {
    onSuccess: (data) => {
      toast.success(`${data.title || data.type} is created.`);
      router.push(`/app/${params.wsId}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const {
    execute: MediaExecute,
    fieldErrors: MediaFieldErrors,
    isLoading: MediaIsLoading,
  } = useAction(createSlip, {
    onSuccess: (data) => {
      toast.success(`${data.title || data.type} is created.`);
      router.push(`/app/${params.wsId}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
      }
    });
  }, []);

  const submitThought = (formData: FormData) => {
    const content = formData.get("content") as string;

    ThoughtExecute({
      type: "THOUGHT",
      content,
      workspaceId: params.wsId,
    });
  };

  const submitBook = (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = JSON.stringify(data);

    BookExecute({
      title,
      type: "BOOK",
      content,
      workspaceId: params.wsId,
    });
  };

  const submitMedia = (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const reference = formData.get("url") as string;

    MediaExecute({
      title,
      type: "MEDIA",
      content,
      reference,
      workspaceId: params.wsId,
    });
  };

  return (
    <div className="max-w-[768px] mx-auto py-6 px-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Create Slip</h1>
      <div>
        <Tabs defaultValue="thought" className="w-full space-y-4">
          <TabsList className="w-2/3 rounded-md">
            <TabsTrigger value="thought" className="flex-1">
              Thought
            </TabsTrigger>
            <TabsTrigger value="book" className="flex-1">
              Book
            </TabsTrigger>
            <TabsTrigger value="media" className="flex-1">
              Media
            </TabsTrigger>
          </TabsList>
          <TabsContent value="thought">
            <div className="p-2 bg-muted rounded-md">
              <form action={submitThought} className="space-y-4">
                <FormTextArea
                  id="content"
                  disabled={ThoughtIsLoading}
                  errors={ThoughtFieldErrors}
                  label="Content"
                  placeholder="Write your thought here..."
                  className="text-sm p-2 dark:bg-zinc-900 bg-white"
                />
                <FormSubmit disabled={ThoughtIsLoading} variant="default">
                  Save
                </FormSubmit>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="book">
            <div className="p-2 bg-muted rounded-md">
              <form action={submitBook} className="space-y-4">
                <FormInput
                  id="title"
                  errors={BookFieldErrors}
                  disabled={BookIsLoading}
                  label="Book Title"
                  placeholder="Eg: Atomic habits"
                  className="text-sm p-2 py-4 dark:bg-zinc-900 bg-white"
                />
                <TableForm
                  disabled={BookIsLoading}
                  data={data}
                  setData={setData}
                />
                <FormSubmit disabled={BookIsLoading} variant="default">
                  Save
                </FormSubmit>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="media">
            <div className="p-2 bg-muted rounded-md">
              <form className="space-y-4" action={submitMedia}>
                <FormInput
                  id="title"
                  type="text"
                  disabled={MediaIsLoading}
                  errors={MediaFieldErrors}
                  label="Media Title"
                  placeholder="Podcast / Video / Blog title"
                  className="text-sm p-2 py-4 dark:bg-zinc-900 bg-white"
                />
                <FormTextArea
                  id="content"
                  disabled={MediaIsLoading}
                  errors={MediaFieldErrors}
                  label="Content"
                  placeholder="Write your thought here..."
                  className="text-sm py-4 p-2 dark:bg-zinc-900 bg-white"
                />
                <FormInput
                  id="url"
                  disabled={MediaIsLoading}
                  errors={MediaFieldErrors}
                  type="url"
                  label="Reference URL"
                  placeholder="https://www.youtube.com/watch?v=1hpbuHHOkjc"
                  className="text-sm p-2 py-4 dark:bg-zinc-900 bg-white"
                />
                <FormSubmit disabled={MediaIsLoading} variant="default">
                  Save
                </FormSubmit>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateSlipPage;
