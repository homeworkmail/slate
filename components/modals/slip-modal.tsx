"use client";

import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSlipModal } from "@/hooks/use-slip-modal";
import { Button } from "../ui/button";

export const SlipModal = () => {
  const { isOpen, close, slip } = useSlipModal();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>{slip?.title || `Thought`}</DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-xs text-muted-foreground">
            {format(slip?.createdAt || new Date(), "dd MMM yyyy")}
            <span className="mx-1">•</span>
            {format(slip?.createdAt || new Date(), "hh:mm")}
          </p>
        </div>
        <Button size="sm" variant="default">
          Make a note
        </Button>
      </DialogContent>
    </Dialog>
  );
};
