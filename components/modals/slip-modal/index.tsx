"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSlipModal } from "@/hooks/use-slip-modal";

export const SlipModal = () => {
  const { isOpen, onClose, slip } = useSlipModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[500px] overflow-y-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-sm">
            {slip?.title || "Slip Title"}
          </DialogTitle>
          {slip?.type !== "BOOK" ? (
            <DialogDescription className="text-zinc-900">
              {slip?.content} <span>{slip?.reference}</span>
            </DialogDescription>
          ) : (
            <Table className="text-sm">
              <TableCaption className="text-xs">{slip.reference}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Page No.</TableHead>
                  <TableHead className="text-left">Content</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {JSON.parse(slip.content).map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.page}</TableCell>
                    <TableCell className="text-left">{row.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full">Make note</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
