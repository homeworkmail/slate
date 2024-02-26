import React from "react";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full dark:bg-zinc-900 transition-all">{children}</div>
  );
}

export default MarketingLayout;
