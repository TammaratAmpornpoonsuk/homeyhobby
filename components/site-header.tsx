"use client"

import { navLink } from "@/lib/homey";
import logo from "../public/projects/logo.svg";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="sticky border-b border-foreground">
      <div className="mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          key={"home"}
          href={"/"}
        >
          <Image
            src={logo}
            alt="logo"
            className="max-h-12 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLink.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5"/> : <Menu className="size-5"/>}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-foreground px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLink.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="text-foreground hover:text-muted">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
