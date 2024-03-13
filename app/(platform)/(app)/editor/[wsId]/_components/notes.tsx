"use client";

import { useEditorNotes } from "@/hooks/use-editor-notes";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export const NotesList = ({
  params,
}: {
  params: { wsId: string; noteId: string };
}) => {
  const { notes } = useEditorNotes();

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      <p className="font-medium text-xs text-zinc-700">Working space</p>
      <div>
        {notes.map((note) => (
          <div
            key={note.noteId}
            className={cn(
              "p-2 rounded-md cursor-pointer border border-white",
              pathname.split("/")[3] === note.noteId && "bg-zinc-100 border"
            )}
            onClick={() => router.push(`/editor/${params.wsId}/${note.noteId}`)}
          >
            <p className="text-xs truncate">{note.noteName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
