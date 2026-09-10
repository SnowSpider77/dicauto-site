"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hqPhone } from "@/lib/site";

const links = [
  { href: "#pecas", label: "Peças" },
  { href: "#sobre", label: "A Dicauto" },
  { href: "#lojas", label: "Lojas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[5.5rem] lg:px-8">
        <a href="#topo" className="flex items-center" aria-label="Dicauto Autopeças">
          <Image
            src="/brand/logo.png"
            alt="Dicauto Autopeças"
            width={220}
            height={171}
            className="h-14 w-auto lg:h-[4.25rem]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-lg tracking-[0.14em] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${hqPhone.tel}`}
            className="inline-flex items-center bg-red px-5 py-2.5 font-display text-lg tracking-[0.16em] text-white transition-colors hover:bg-red-soft"
          >
            Pedir uma peça
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`block h-px bg-white ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="fixed inset-0 top-[4.75rem] z-50 bg-navy px-6 py-10 lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${hqPhone.tel}`}
              className="mt-8 inline-flex w-full items-center justify-center bg-red py-4 font-display text-2xl tracking-[0.16em] text-white"
            >
              Pedir uma peça
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
