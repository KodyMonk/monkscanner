"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "QR Generator", href: "/" },
  { label: "QR Types", href: "/qr-types" },
  { label: "Features", href: "/features" },
  { label: "URL QR", href: "/url-qr-code-generator" },
  { label: "WiFi QR", href: "/wifi-qr-code-generator" },
  { label: "vCard QR", href: "/vcard-qr-code-generator" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060b10] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/monkscanner-logo.svg?v=3"
            alt="MonkScanner logo"
            width={240}
            height={70}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {navLinks.map((item, index) => (
            <Link
              key={item.href}
              className={index === 0 ? "text-yellow-400" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 px-3 py-2 text-sm md:block">
            🌐 EN
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#060b10] px-4 pb-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-gray-200 hover:bg-white/5 hover:text-yellow-400"
              >
                {item.label}
              </Link>
            ))}

            <button className="mt-2 rounded-xl border border-white/10 px-4 py-3 text-left text-sm font-bold">
              🌐 EN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}