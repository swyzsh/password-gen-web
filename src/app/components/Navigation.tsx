"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Settings", href: "/settings" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="m-4 flex flex-row justify-center items-center gap-4">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link href={link.href} key={link.name}>
            <button
              className={
                !isActive
                  ? "px-2 py-1 text-base text-center text-zinc-100 bg-zinc-500/20 border rounded-lg border-zinc-300/20"
                  : "px-2 py-1 text-base text-center text-zinc-100 bg-rose-500/20 border rounded-lg border-rose-300/20"
              }
            >
              {link.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
