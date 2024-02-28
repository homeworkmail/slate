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
      <Navbar wsId={wsId} />
      <Guide />
      {children}
    </div>
  );
}

export default WorkspaceIdLayout;
