import { Logo } from "@/components/logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      <Logo />
      <p>Could not find requested resource</p>
      <Link href="/app" className="underline text-xs">
        Return Home
      </Link>
    </div>
  );
}
