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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05080d]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/monkscanner-logo-v2.svg"
            alt="MonkScanner logo"
            width={220}
            height={60}
            priority
            className="h-11 w-auto object-contain md:h-12"
          />
        </Link>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 shadow-sm lg:flex">
          {navLinks.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                index === 0
                  ? "bg-yellow-400 text-black"
                  : "text-gray-200 hover:bg-white/10 hover:text-yellow-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-bold text-gray-100 transition hover:bg-white/10 md:block">
            🌐 EN
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#05080d] px-4 pb-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 pt-4">
            {navLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  index === 0
                    ? "bg-yellow-400 text-black"
                    : "text-gray-200 hover:bg-white/5 hover:text-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button className="mt-2 rounded-2xl border border-white/10 px-4 py-3 text-left text-sm font-bold">
              🌐 EN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}