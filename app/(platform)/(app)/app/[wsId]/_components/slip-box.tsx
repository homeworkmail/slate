"use client";

import { deleteSlip } from "@/actions/delete-slip";
import moment from "moment";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { Slip } from "@prisma/client";
import {
  BookOpen,
  Laptop2,
  Lightbulb,
  MoreVertical,
  Pen,
  Trash,
} from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSlipModal } from "@/hooks/use-slip-modal";
import Link from "next/link";

interface SlipBoxProps {
  slip: Slip;
}

export const SlipBox = ({ slip }: SlipBoxProps) => {
  const router = useRouter();

  const { onOpen } = useSlipModal();

  const { execute } = useAction(deleteSlip, {
    onSuccess: (data) => {
      toast.success(`${data.type} deleted`);
      router.push(`/app/${slip.workspaceId}`);
    },

    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    execute({ id: slip.id });
  };

  return (
    <div
      className="border border-zinc-300 rounded-md cursor-pointer"
      onClick={() => onOpen(slip)}
    >
      <div className="flex items-center gap-2 p-2">
        {slip.type === "BOOK" ? (
          <>
            <div className="w-fit p-2">
              <BookOpen className="h-4 w-4" />
            </div>
            <h1 className="truncate text-sm font-medium">
              {JSON.parse(slip.content)[0].content}
            </h1>
          </>
        ) : slip.type === "MEDIA" ? (
          <>
            <div className="w-fit p-2">
              <Laptop2 className="h-4 w-4" />
            </div>
            <h1 className="truncate text-sm font-medium">
              {slip.title || slip.content}
            </h1>
          </>
        ) : (
          <>
            <div className="w-fit p-2">
              <Lightbulb className="h-4 w-4" />
            </div>
            <h1 className="truncate text-sm font-medium">
              {slip.title || slip.content}
            </h1>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild onClick={(e) => e.stopPropagation()}>
            <Button
              className="ml-auto w-auto h-auto p-2"
              size="icon"
              variant="ghost"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="text-sm p-0 w-40 overflow-hidden"
          >
            <Link
              onClick={(e) => e.stopPropagation()}
              href={{
                pathname: `/app/${slip.workspaceId}/edit-slip`,
                query: {
                  id: slip.id,
                  type: slip.type,
                  title: slip.title,
                  content: slip.content,
                  reference: slip.reference,
                },
              }}
            >
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start rounded-none"
              >
                <Pen className="h-4 w-4 mr-2" />
                <p>Edit</p>
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                return onDelete();
              }}
              className="w-full flex items-center justify-start rounded-none hover:text-red-500 transition-all"
            >
              <Trash className="h-4 w-4 mr-2" />
              <p>Delete</p>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-2 flex items-center gap-2">
        <p className="text-xs">
          {moment(slip.updatedAt, "YYYYMMDD").fromNow()}
        </p>
      </div>
    </div>
  );
};
