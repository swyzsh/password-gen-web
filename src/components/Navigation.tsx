"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="mt-8 flex flex-row justify-center items-center gap-4">
      {pathname === "/" ? (
        <Link href="/settings">
          <button className="px-2 py-1 text-base text-center text-zinc-100 bg-zinc-500/20 border rounded-lg border-zinc-300/20">
            Settings
          </button>
        </Link>
      ) : pathname === "/settings" ? (
        <Link href="/">
          <button className="px-2 py-1 text-base text-center text-zinc-100 bg-zinc-500/20 border rounded-lg border-zinc-300/20">
            Go back ?
          </button>
        </Link>
      ) : null}
    </div>
  );
}
