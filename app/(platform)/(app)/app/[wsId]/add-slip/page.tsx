"use client";
import { createSlip } from "@/actions/create-slip";
import { useAction } from "@/hooks/use-action";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SlipType } from "@prisma/client";
import { FormInput } from "@/components/form/form-input";
import { FormTextArea } from "@/components/form/form-textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { BookContent } from "./book-content";

export type Row = {
  id: number;
  page: string;
  content: string;
};

function AddSlipPage({ params }: { params: { wsId: string } }) {
  const router = useRouter();

  const [type, setType] = useState<"THOUGHT" | "MEDIA" | "BOOK">("THOUGHT");

  const [bookContent, setBookContent] = useState<Row[]>([]);

  const { execute, fieldErrors, isLoading } = useAction(createSlip, {
    onSuccess: (data) => {
      toast.success(`${data.type} created.`);
      router.push(`/app/${data.workspaceId}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onChange = (e: string) => {
    setType(e as SlipType);
  };

  const addSlip = (formData: FormData) => {
    const title = (formData.get("title") as string) || undefined;
    const refUrl = (formData.get("refUrl") as string) || undefined;
    const wsId = params.wsId;

    let content;

    if (type !== "BOOK") {
      content = formData.get("content") as string;
    } else {
      content = JSON.stringify(bookContent);
    }

    execute({ title, type, content, reference: refUrl, workspaceId: wsId });
  };

  return (
    <div className="mt-6 px-4 space-y-4 max-w-[714px] mx-auto">
      <div className="border-b border-zinc-300 pb-2">
        <div>
          <h1 className="text-lg font-bold text-zinc-900">Add slip</h1>
          <p className="text-xs text-zinc-700">
            These slips are used temporarily as a reference to make detailed
            notes later.
          </p>
        </div>
      </div>
      <form action={addSlip}>
        <div className="space-y-4">
          <Label
            htmlFor="type"
            className="text-xs font-semibold dark:text-zinc-300 text-zinc-700"
          >
            Type
            <Select onValueChange={onChange} value={type}>
              <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none font-normal text-zinc-500">
                <SelectValue placeholder="Select a type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="THOUGHT">Thought</SelectItem>
                  <SelectItem value="BOOK">Book</SelectItem>
                  <SelectItem value="MEDIA">Media</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Label>
          {(type === "BOOK" || type === "MEDIA") && (
            <FormInput
              id="title"
              errors={fieldErrors}
              disabled={isLoading}
              label="Title"
              placeholder="Enter title..."
            />
          )}
          {type !== "BOOK" ? (
            <FormTextArea
              id="content"
              errors={fieldErrors}
              disabled={isLoading}
              placeholder="Write your content..."
              label="Content"
            />
          ) : (
            <BookContent content={bookContent} setContent={setBookContent} />
          )}
          {(type === "BOOK" || type === "MEDIA") && (
            <FormInput
              id="refUrl"
              errors={fieldErrors}
              disabled={isLoading}
              label="Reference"
              placeholder="Enter reference..."
            />
          )}
          <FormSubmit disabled={isLoading} variant="default">
            Add Slip
          </FormSubmit>
        </div>
      </form>
    </div>
  );
}

export default AddSlipPage;
