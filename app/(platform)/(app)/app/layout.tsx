import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-full">{children}</div>;
}

export default AppLayout;
