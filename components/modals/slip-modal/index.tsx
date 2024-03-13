"use client";

import { createNote } from "@/actions/create-note";
import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import { useAction } from "@/hooks/use-action";
import { useSlipModal } from "@/hooks/use-slip-modal";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SlipModal = () => {
  const { isOpen, onClose, slip, id } = useSlipModal();
  const router = useRouter();

  const { execute, isLoading } = useAction(createNote, {
    onSuccess: (data) => {
      toast.success(`Note created`);
      router.push(`/editor/${data.workspaceId}/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const makeNote = () => {
    if (slip?.Note[0]?.id) {
    } else {
      execute({
        workspaceId: id as string,
        content: JSON.stringify([]),
        slipId: slip?.id,
        title: slip?.title || slip?.content,
      });

      onClose();
    }
  };

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
        {!!slip?.Note[0]?.id ? (
          <></>
        ) : (
          <DialogFooter>
            <Button disabled={isLoading} onClick={makeNote} className="w-full">
              Make note
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
