import React from "react";

async function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-full">{children}</div>;
}

export default AppLayout;
