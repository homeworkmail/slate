"use client";

import { useEffect, useState } from "react";
import { SlipModal } from "../modals/slip-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SlipModal />
    </>
  );
};
