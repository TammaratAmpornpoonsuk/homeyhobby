import { navLink } from "@/lib/homey";
import Link from "next/link";

export function MainButton() {
  return (
    <div className="grid justify-center gap-3 text-foreground text-center text-sm md:grid-cols-2 lg:grid-cols-4">
      {navLink.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center justify-center whitespace-nowrap rounded-4xl border border-primary bg-primary px-24 py-6 transition-colors hover:text-muted"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
