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
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

interface SlipBoxProps {
  slip: Slip;
  user: string;
  image: string;
}

export const SlipBox = ({ slip, user, image }: SlipBoxProps) => {
  const router = useRouter();

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
    <div className="border border-zinc-300 rounded-md">
      <div className="flex items-center gap-2 p-2">
        {slip.type === "BOOK" && (
          <>
            <div className="w-fit p-2">
              <BookOpen className="h-4 w-4" />
            </div>
            <h1 className="truncate text-sm font-medium">
              {JSON.parse(slip.content)[0].content}
            </h1>
          </>
        )}
        {slip.type === "MEDIA" && (
          <>
            <div className="w-fit p-2">
              <Laptop2 className="h-4 w-4" />
            </div>
            <h1 className="truncate text-sm font-medium">
              {slip.title || slip.content}
            </h1>
          </>
        )}
        {slip.type === "THOUGHT" && (
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
          <PopoverTrigger asChild>
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
            className="flex items-center text-sm p-0 w-40"
          >
            <Button
              variant="ghost"
              onClick={onDelete}
              className="w-full hover:bg-red-500 hover:text-white"
            >
              <Trash className="h-4 w-4 mr-2" />
              <p>Delete</p>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-2 flex items-center gap-2">
        <Image
          src={image}
          width={20}
          height={20}
          alt={`${user}`}
          className="rounded-full"
        />
        <p className="text-xs">{user}</p>
        <span>·</span>
        <p className="text-xs">
          {moment(slip.createdAt, "YYYYMMDD").fromNow()}
        </p>
      </div>
    </div>
  );
};
