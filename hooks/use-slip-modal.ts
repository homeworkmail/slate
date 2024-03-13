import { Note, Slip } from "@prisma/client";
import { create } from "zustand";

type SlipModalStore = {
  slip?: { Note: Note[] } & Slip;
  id?: string;
  isOpen: boolean;
  onOpen: (slip: { Note: Note[] } & Slip, id: string) => void;
  onClose: () => void;
};

export const useSlipModal = create<SlipModalStore>((set) => ({
  slip: undefined,
  id: undefined,
  isOpen: false,
  onOpen: (slip: { Note: Note[] } & Slip, id: string) =>
    set({ isOpen: true, slip, id }),
  onClose: () => set({ isOpen: false, slip: undefined, id: undefined }),
}));
