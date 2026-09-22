"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/navLinks";
import { MobileMenu } from "@/components/navBar/MobileMenu";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-20 mx-auto box-border w-full max-w-[1440px] px-6 pt-4">
      <header className="mx-auto flex max-w-[1392px] items-center gap-2 overflow-x-auto whitespace-nowrap rounded-full bg-white/[0.83] py-3 pl-5 pr-3 shadow-[0_12px_32px_rgba(30,32,36,0.10),0_1px_2px_rgba(30,32,36,0.06)] backdrop-blur-md">
        <div className="mr-5 flex shrink-0 items-center gap-2.5 whitespace-nowrap">
          <Image
            src="/quiptechFieldLogo.png"
            alt="QuipTech FIELD"
            width={1344}
            height={448}
            className="h-9 w-auto shrink-0"
            priority
          />
        </div>
        <nav className="mr-auto hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-[15px] min-[1150px]:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-navText transition-colors hover:bg-surfaceGray"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          className="hidden shrink-0 whitespace-nowrap px-2 text-sm font-medium text-bodyGray min-[1150px]:inline-block"
        >
          Book a demo
        </a>
        <a
          href="#portal-login"
          className="hidden h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-5 text-sm font-semibold text-white min-[1150px]:inline-flex"
        >
          Log in / Sign up
        </a>
        <button
          type="button"
          aria-label="Menu"
          onClick={toggleMenu}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-0 bg-transparent text-ink min-[1150px]:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            style={{
              display: menuOpen ? "none" : "block",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            style={{
              display: menuOpen ? "block" : "none",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </div>
  );
};
