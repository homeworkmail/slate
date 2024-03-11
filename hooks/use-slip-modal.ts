import { Slip } from "@prisma/client";
import { create } from "zustand";

type SlipModalStore = {
  slip?: Slip;
  isOpen: boolean;
  onOpen: (slip: Slip) => void;
  onClose: () => void;
};

export const useSlipModal = create<SlipModalStore>((set) => ({
  slip: undefined,
  isOpen: false,
  onOpen: (slip: Slip) => set({ isOpen: true, slip }),
  onClose: () => set({ isOpen: false, slip: undefined }),
}));
