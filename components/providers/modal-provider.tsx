"use client";

import { useEffect, useState } from "react";
import { SlipModal } from "../modals/slip-modal";

export const ModalProvider = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SlipModal />
    </>
  );
};
