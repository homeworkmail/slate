import React from "react";
import { Sidebar } from "../_components/sidebar";

function WorkspaceIdPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-12 gap-2">
        <div className="md:col-span-2 col-span-0">
          <Sidebar />
        </div>
        <div className="md:col-span-10 col-span-12 md:ml-12">{children}</div>
      </div>
    </div>
  );
}

export default WorkspaceIdPage;
