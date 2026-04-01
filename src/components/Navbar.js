"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/products", label: "Sản phẩm" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Liên hệ" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const activeCls =
    "border-b-2 border-primary pb-1 font-body text-base font-bold text-primary transition-colors dark:border-blue-400 dark:text-blue-400";
  const inactiveCls =
    "border-b-2 border-transparent pb-1 font-body text-base font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-300";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-xl dark:bg-slate-950/80 dark:shadow-none">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-4 font-headline text-3xl font-bold tracking-tight text-primary dark:text-white"
        >
          <Image
            src="/Images/logo.png"
            width={40}
            height={40}
            alt="Logo Fabricon"
            className="h-10"
            priority
          />
          Fabricon
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? activeCls : inactiveCls}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-primary px-6 py-2.5 font-headline text-base font-semibold text-on-primary transition-all duration-200 ease-in-out hover:scale-95"
          >
            Yêu cầu báo giá
          </Link>
        </div>

        <button className="text-primary md:hidden" onClick={toggleMenu}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 top-full w-full border-t border-slate-100 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:hidden`}
      >
        <div className="flex flex-col space-y-1 font-body">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMenu}
              className={
                isActive(href)
                  ? "block border-l-4 border-primary bg-surface-container-low py-2 pl-3 font-bold text-primary"
                  : "block border-l-4 border-transparent py-2 pl-3 text-slate-600 transition-colors hover:bg-surface-container-low hover:text-primary dark:text-slate-300"
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="mt-4 block w-full rounded-md bg-primary px-6 py-3 text-center font-headline text-base font-semibold text-on-primary"
          >
            Yêu cầu báo giá
          </Link>
        </div>
      </div>
    </nav>
  );
}
