"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

const navItems = [
  { name: "Início", href: "#" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Projetos", href: "#projetos" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-transparent.png" alt="OTTO POWER Energia Solar" className="h-16 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors text-slate-600 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 rounded-full px-6 h-10 inline-flex items-center justify-center font-bold transition-all hover:shadow-lg hover:shadow-yellow-200 hover:scale-105">
            Solicitar Orçamento
          </a>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors">
            <Menu className="h-6 w-6 text-slate-600" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
            <nav className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-4 bg-yellow-400 hover:bg-yellow-300 w-full h-10 inline-flex items-center justify-center text-blue-950 rounded-lg font-bold transition-colors">
                Solicitar Orçamento
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
