import React from "react";
import { Sidebar } from "../_components/sidebar";

function WorkspaceIdPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ml-12">{children}</div>
      </div>
    </div>
  );
}

export default WorkspaceIdPage;
