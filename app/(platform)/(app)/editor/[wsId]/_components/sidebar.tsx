import { Logo } from "@/components/logo";
import { Search } from "./search";
import { db } from "@/lib/db";
import { NotesList } from "./notes";

export const Sidebar = async ({
  params,
}: {
  params: { wsId: string; noteId: string };
}) => {
  const searchNotes = await db.note.findMany({
    where: {
      workspaceId: params.wsId,
    },
  });

  return (
    <div className="w-full border-r h-full p-4 space-y-4">
      <Logo />
      <Search notes={searchNotes} />
      <NotesList params={params} />
    </div>
  );
};
