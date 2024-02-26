import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  hasUser: boolean;
}

function Header({ hasUser }: HeaderProps) {
  return (
    <div className="fixed top-0 w-full border-b-[1px] border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
      <div className="w-4/5 max-w-[1204px] p-4 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center justify-center gap-2">
          <ModeToggle />
          {hasUser ? (
            <Link href="/app">
              <Button size="lg">Go to app</Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button size="sm" variant="ghost">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" variant="default">
                  Get started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
