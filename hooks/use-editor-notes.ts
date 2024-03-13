import { create } from "zustand";

type EditorNotesStore = {
  notes: { noteId: string; noteName: string }[];
  addNote: (noteId: string, noteName: string) => void;
  removeNote: (noteId: string) => void;
};

export const useEditorNotes = create<EditorNotesStore>((set, get) => ({
  notes: [],

  addNote: (noteId: string, noteName: string) => {
    const { notes } = get();
    if (!notes.some((note) => note.noteId === noteId)) {
      set({ notes: [...notes, { noteId, noteName }] });
    }
  },

  removeNote: (noteId: string) => {
    const updatedNotes = get().notes.filter((n) => n.noteId !== noteId);
    set({ notes: updatedNotes });
  },
}));
