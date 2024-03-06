"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit2, Plus, Save, Trash } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Data } from "../page";
import { toast } from "sonner";

export const TableForm = ({
  data,
  setData,
  disabled,
}: {
  data: Data;
  setData: Dispatch<React.SetStateAction<Data>>;
  disabled: boolean;
}) => {
  const [page, setPage] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const addData = () => {
    const randomNumber = Math.floor(Math.random() * 100_000_000);

    if (page.trim() && content.trim()) {
      setData((prev) => [...prev, { page: page, content, id: randomNumber }]);
      setContent("");
      setPage("");
    } else {
      toast.info("Please add the required information.");
    }
  };

  return (
    <div className="space-y-2">
      <Table className="dark:bg-zinc-900 bg-white rounded-md">
        <TableHeader>
          <TableRow className="text-xs">
            <TableHead className="w-24">Page No.</TableHead>

            <TableHead>Content</TableHead>

            <TableHead className="w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableRoww
              disabled={disabled}
              row={row}
              setData={setData}
              data={data}
            />
          ))}
        </TableBody>
      </Table>
      <div>
        <Table className="dark:bg-zinc-900 bg-white rounded-md">
          <TableBody>
            <TableRow className="flex items-center">
              <TableCell className="w-24">
                <Input
                  value={page}
                  disabled={disabled}
                  type="text"
                  onChange={(e) => setPage(e.target.value)}
                  className="h-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
                />
              </TableCell>
              <TableCell className="flex-1">
                <Input
                  value={content}
                  disabled={disabled}
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  className="h-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
                />
              </TableCell>
              <TableCell className="w-24">
                <div
                  onClick={addData}
                  className="dark:hover:bg-zinc-800 hover:bg-zinc-200 cursor-pointer rounded-md transition-all h-10 w-10 flex items-center justify-center text-lg"
                >
                  <Plus className="h-4 w-4" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-xs w-full text-center mt-1 bg-white rounded-md py-1">
          Please click on + icon after filling your content to add it to the
          list.
        </p>
      </div>
    </div>
  );
};

const TableRoww = ({
  row,
  setData,
  data,
  disabled,
}: {
  row: { id: number; page: string; content: string };
  setData: Dispatch<SetStateAction<Data>>;
  data: Data;
  disabled: boolean;
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [page, setPage] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <TableRow key={row.page} className="text-sm">
      {editing ? (
        <>
          <TableCell className="w-24">
            <Input
              value={page}
              disabled={disabled}
              type="text"
              onChange={(e) => setPage(e.target.value)}
              className="h-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
            />
          </TableCell>
          <TableCell className="flex-1">
            <Input
              value={content}
              type="text"
              disabled={disabled}
              onChange={(e) => setContent(e.target.value)}
              className="h-10 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
            />
          </TableCell>
          <TableCell className="w-24">
            <div
              onClick={() => {
                const dpoint = data.find((r) => r.id === row.id);
                if (dpoint) {
                  dpoint.content = content;
                  dpoint.page = page;
                }
                setEditing(false);
              }}
              className="dark:hover:bg-zinc-800 hover:bg-zinc-200 cursor-pointer rounded-md transition-all h-10 w-10 flex items-center justify-center text-lg"
            >
              <Save className="h-4 w-4" />
            </div>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>{row.page}</TableCell>

          <TableCell className="truncate max-w-56">
            <p>{row.content}</p>
          </TableCell>

          <TableCell className="flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    onClick={() => {
                      setPage(row.page);
                      setContent(row.content);
                      setEditing(true);
                    }}
                    className="dark:hover:bg-zinc-800 hover:bg-zinc-200 cursor-pointer rounded-md transition-all h-10 w-10 flex items-center justify-center text-lg"
                  >
                    <Edit2 className="h-4 w-4" />
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p>Edit</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    onClick={() => {
                      const removedData = data.filter((r) => r.id != row.id);

                      setData(removedData);
                    }}
                    className="dark:hover:bg-zinc-800 hover:bg-zinc-200 cursor-pointer rounded-md transition-all h-10 w-10 flex items-center justify-center text-lg"
                  >
                    <Trash className="h-4 w-4" />
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p>Delete</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};
