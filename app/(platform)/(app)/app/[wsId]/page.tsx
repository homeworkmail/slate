import React from "react";
import { Sidebar } from "./_components/sidebar";

function WorkspaceIdPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-4 px-4 mt-6">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ml-12">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Recents
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceIdPage;
