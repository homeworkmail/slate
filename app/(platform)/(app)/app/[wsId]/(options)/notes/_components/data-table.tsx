import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Note, NoteTags, Tag } from "@prisma/client";
import moment from "moment";
import Link from "next/link";

interface DataTableProps {
  data: ({ tags: ({ Tag: Tag | null } & NoteTags)[] } & Note)[];
}

export const DataTable = ({ data }: DataTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Title</TableHead>
          <TableHead className="text-center">Tags</TableHead>
          <TableHead className="text-right">Last updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((note) => (
          <TableRow key={note.id} className="cursor-pointer">
            <TableCell className="font-medium hover:underline">
              <Link
                href={`/editor/${note.workspaceId}/${note.id}`}
                target="_blank"
              >
                {note.title}
              </Link>
            </TableCell>
            <TableCell>
              {note.tags.map((tag) => (
                <p>{tag.Tag?.name}</p>
              ))}
            </TableCell>
            <TableCell className="text-right">
              {moment(note.updatedAt, "YYYYMMDD").fromNow()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
