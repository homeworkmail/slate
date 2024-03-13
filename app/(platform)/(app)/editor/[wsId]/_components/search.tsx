"use client";

import { Input } from "@/components/ui/input";
import { useEditorNotes } from "@/hooks/use-editor-notes";
import { Note } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Search = ({ notes }: { notes: Note[] }) => {
  const [term, setTerm] = useState<string>("");

  const data = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(term.toLowerCase()) ||
      note.title.toLowerCase().includes(term.toLowerCase())
  );

  const router = useRouter();

  const { addNote } = useEditorNotes();

  const handleSearchClick = (
    noteId: string,
    wsId: string,
    noteName: string
  ) => {
    router.push(`/editor/${wsId}/${noteId}`);
    addNote(noteId, noteName);
    setTerm("");
  };

  return (
    <div className="space-y-2">
      <Input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="bg-transparent h-auto w-full focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
        placeholder="Search"
      />
      {!!term && (
        <div className="border rounded-md p-2 space-y-2">
          {data.length > 0 ? (
            data.map((note) => (
              <p
                onClick={() =>
                  handleSearchClick(note.id, note.workspaceId, note.title)
                }
                key={note.id}
                className="text-xs hover:bg-zinc-100 transition-colors p-2 rounded-md cursor-pointer"
              >
                {note.title}
              </p>
            ))
          ) : (
            <p className="text-xs hover:bg-zinc-100 transition-colors p-2 rounded-md cursor-pointer">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
};
