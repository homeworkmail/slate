import React from "react";
import { Navbar } from "./_components/navbar";
import { Guide } from "./_components/guide";

function WorkspaceIdLayout({
  children,
  params: { wsId },
}: {
  children: React.ReactNode;
  params: { wsId: string };
}) {
  return (
    <div>
      <Guide />
      <Navbar wsId={wsId} />
      {children}
    </div>
  );
}

export default WorkspaceIdLayout;
