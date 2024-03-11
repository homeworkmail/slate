"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Plus, Save, Trash } from "lucide-react";
import { useState } from "react";
import { Row } from "./page";

interface BookContentProps {
  content: Row[];
  setContent: React.Dispatch<React.SetStateAction<Row[]>>;
}

export const BookContent = ({ content, setContent }: BookContentProps) => {
  const [page, setPage] = useState<string>("");
  const [inputContent, setInputContent] = useState<string>("");

  const addRow = () => {
    if (page && content) {
      const randomId = Math.round(Math.random() * 100_000_000);
      setContent((prev: any) => [
        ...prev,
        { id: randomId, page, content: inputContent },
      ]);
      setInputContent("");
      setPage("");
    }
  };

  return (
    <div>
      <Label htmlFor="type" className="text-xs font-semibold  text-zinc-700">
        Content
        <Table className="text-xs">
          <TableHeader className="w-full">
            <TableRow>
              <TableHead className="w-1/4">Page No.</TableHead>
              <TableHead>Content</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.map((row) => (
              <BookTableRow
                key={row.id}
                row={row}
                content={content}
                setContent={setContent}
              />
            ))}
            <TableRow>
              <TableCell>
                <Input
                  placeholder="001"
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
                />
              </TableCell>
              <TableCell className="w-full">
                <Input
                  placeholder="Write your thoughts about the page or paragraph..."
                  value={inputContent}
                  onChange={(e) => setInputContent(e.target.value)}
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
                />
              </TableCell>
              <TableCell className="flex items-center justify-end">
                <Button
                  size="icon"
                  type="button"
                  className="w-auto h-auto p-3"
                  variant="outline"
                  onClick={addRow}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-xs font-normal">
          Please click on the + icon after adding your thoughts to add the row
          into the content.
        </p>
      </Label>
    </div>
  );
};

const BookTableRow = ({
  row,
  content,
  setContent,
}: {
  row: Row;
  content: Row[];
  setContent: React.Dispatch<React.SetStateAction<Row[]>>;
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [page, setPage] = useState<string>(row.page);
  const [inputContent, setInputContent] = useState<string>(row.content);

  const saveRow = () => {
    console.log(page, inputContent);

    const updatedContent = content.map((r) =>
      r.id === row.id ? { ...r, page, content: inputContent } : r
    );

    setContent(updatedContent);

    setEdit(false);
  };

  const deleteRow = () => {
    const updatedContent = content.filter((r) => r.id != row.id);
    setContent(updatedContent);
  };

  return (
    <>
      {edit ? (
        <TableRow>
          <TableCell>
            <Input
              placeholder="001"
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className="focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
            />
          </TableCell>
          <TableCell className="w-full">
            <Input
              placeholder="Write your thoughts about the page or paragraph..."
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
              className="focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
            />
          </TableCell>
          <TableCell className="flex items-center justify-end">
            <Button
              size="icon"
              className="w-auto h-auto p-3"
              variant="outline"
              type="button"
              onClick={saveRow}
            >
              <Save className="w-4 h-4" />
            </Button>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell>{row.page}</TableCell>
          <TableCell>{row.content}</TableCell>
          <TableCell className="flex items-center gap-1">
            <Button
              className="w-auto h-auto p-2"
              size="icon"
              variant="ghost"
              type="button"
              onClick={() => setEdit(true)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              onClick={deleteRow}
              className="w-auto h-auto p-2"
              size="icon"
              variant="ghost"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
