import React from "react";
import { Navbar } from "./_components/navbar";

function WorkspaceIdLayout({
  children,
  params: { wsId },
}: {
  children: React.ReactNode;
  params: { wsId: string };
}) {
  return (
    <div>
      <Navbar wsId={wsId} />
      {children}
    </div>
  );
}

export default WorkspaceIdLayout;
