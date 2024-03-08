import { Slip } from "@prisma/client";
import { create } from "zustand";

type SlipModalStore = {
  slip?: Slip;
  isOpen: boolean;
  open: (slip: Slip) => void;
  close: () => void;
};

export const useSlipModal = create<SlipModalStore>((set) => ({
  id: undefined,
  isOpen: false,
  open: (slip) => set({ slip, isOpen: true }),
  close: () => set({ isOpen: false }),
}));
