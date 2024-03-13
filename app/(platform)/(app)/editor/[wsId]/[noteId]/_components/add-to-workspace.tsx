"use client";

import { Button } from "@/components/ui/button";
import { useEditorNotes } from "@/hooks/use-editor-notes";
import { Plus } from "lucide-react";

export const AddToWorkspace = ({
  noteId,
  noteName,
}: {
  noteId: string;
  noteName: string;
}) => {
  const { addNote, notes } = useEditorNotes();

  if (notes.find((note) => note.noteId === noteId)) {
    return null;
  }

  return (
    <div>
      <Button
        onClick={() => addNote(noteId, noteName)}
        size="sm"
        variant="ghost"
        className="text-xs space-x-2"
      >
        <Plus className="h-4 w-4" />
        <p>Add to workspace</p>
      </Button>
    </div>
  );
};
