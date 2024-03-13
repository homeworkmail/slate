"use client";
import { createSlip } from "@/actions/create-slip";
import { useAction } from "@/hooks/use-action";
import { useRouter, useSearchParams } from "next/navigation";
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
import { Input } from "@/components/ui/input";
import { FormErrors } from "@/components/form/form-errors";
import { Textarea } from "@/components/ui/textarea";
import { updateSlip } from "@/actions/update-slip";

export type Row = {
  id: number;
  page: string;
  content: string;
};

function AddSlipPage({ params }: { params: { wsId: string } }) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [type, setType] = useState<"THOUGHT" | "MEDIA" | "BOOK">(
    searchParams.get("type") as SlipType
  );

  const [title, setTitle] = useState<string>(
    searchParams.get("title") as string
  );

  const [content, setContent] = useState<string>(
    searchParams.get("content") as string
  );

  const [ref, setRef] = useState<string>(
    searchParams.get("reference") as string
  );

  let book;

  if (type === "BOOK") {
    book = JSON.parse(content);
  }

  const [bookContent, setBookContent] = useState<Row[]>(book);

  const { execute, fieldErrors, isLoading } = useAction(updateSlip, {
    onSuccess: (data) => {
      toast.success(`${data.type} edited.`);
      router.push(`/app/${data.workspaceId}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const editSlip = () => {
    let cont;

    if (type === "BOOK") {
      cont = JSON.stringify(bookContent);
    } else {
      cont = content;
    }

    execute({
      id: searchParams.get("id") as string,
      title,
      type,
      content: cont,
      reference: ref,
      workspaceId: params.wsId,
    });
  };

  return (
    <div className="px-4 space-y-4 max-w-[714px] mx-auto">
      <div className="border-b border-zinc-300 pb-2">
        <div>
          <h1 className="text-lg font-bold text-zinc-900">
            Edit slip - {type}
          </h1>
          <p className="text-xs text-zinc-700">
            These slips are used temporarily as a reference to make detailed
            notes later.
          </p>
        </div>
      </div>
      <form action={editSlip}>
        <div className="space-y-4">
          {(type === "BOOK" || type === "MEDIA") && (
            <>
              <Label className="text-xs font-semibold  text-zinc-700">
                Title
                <Input
                  id="title"
                  disabled={isLoading}
                  defaultValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title..."
                />
              </Label>
              <FormErrors id="title" errors={fieldErrors} />
            </>
          )}
          {type !== "BOOK" ? (
            <>
              <Label className="text-xs font-semibold  text-zinc-700">
                Content
                <Textarea
                  id="content"
                  disabled={isLoading}
                  defaultValue={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your content..."
                />
              </Label>
              <FormErrors id="content" errors={fieldErrors} />
            </>
          ) : (
            <BookContent content={bookContent} setContent={setBookContent} />
          )}
          {(type === "BOOK" || type === "MEDIA") && (
            <>
              <Label className="text-xs font-semibold  text-zinc-700">
                Reference
                <Input
                  id="refUrl"
                  disabled={isLoading}
                  defaultValue={ref}
                  onChange={(e) => setRef(e.target.value)}
                  placeholder="Enter reference..."
                />
              </Label>
              <FormErrors id="refUrl" errors={fieldErrors} />
            </>
          )}
          <FormSubmit disabled={isLoading} variant="default">
            Edit Slip
          </FormSubmit>
        </div>
      </form>
    </div>
  );
}

export default AddSlipPage;
