"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Note, Slip } from "@prisma/client";
import { Editor } from "./editor";
import { Textarea } from "@/components/ui/textarea";
import { useAction } from "@/hooks/use-action";
import { updateNote } from "@/actions/update-note";
import { useState } from "react";

export const Content = ({ note }: { note: { slip: Slip | null } & Note }) => {
  const { execute } = useAction(updateNote);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const onChangeTitle = (title: string) => {
    execute({ content: content as string, id: note.id, title });
  };

  const onChangeContent = (content: string) => {
    execute({ content, id: note.id, title });
  };

  return (
    <div className="p-6 mt-4 w-5/6 mx-auto space-y-4">
      <Textarea
        id="title"
        onBlur={(e) => onChangeTitle(e.target.value)}
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Untitled"
        className="max-h-20 min-h-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none border-none text-xl font-bold p-0 text-wrap"
      />
      <div className="border p-4 rounded-md">
        <div className="max-h-[500px] overflow-y-scroll scrollbar-hide">
          <div>
            <h1 className="text-sm font-medium mb-1">
              {note.slip?.title || "Slip Title"}
            </h1>
            {note.slip?.type !== "BOOK" ? (
              <>
                <p className="text-zinc-900 text-xs">{note.slip?.content}</p>
                <p className="text-xs text-zinc-500 text-center">
                  {note.slip?.reference}
                </p>
              </>
            ) : (
              <Table className="text-sm">
                <TableCaption className="text-xs">
                  {note.slip.reference}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Page No.</TableHead>
                    <TableHead className="text-left">Content</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {JSON.parse(note.slip.content).map((row: any) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">{row.page}</TableCell>
                      <TableCell className="text-left">{row.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
      <Editor onChange={onChangeContent} initialContent={content as string} />
    </div>
  );
};
