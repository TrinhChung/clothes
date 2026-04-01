"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/products", label: "Sản phẩm" },
    { href: "/about#contact", label: "Liên hệ" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  const activeCls =
    "text-primary dark:text-blue-400 font-bold border-b-2 border-primary dark:border-blue-400 pb-1 text-base font-medium font-body transition-colors";
  const inactiveCls =
    "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-base font-medium font-body border-b-2 border-transparent pb-1";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 text-3xl font-bold tracking-tight text-primary dark:text-white font-headline">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
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
            href="/about#contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-semibold text-base hover:scale-95 duration-200 ease-in-out transition-all"
          >
            Yêu cầu báo giá
          </Link>
        </div>

        {/* Mobile Navbar toggle */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 p-4 shadow-lg border-t border-slate-100 dark:border-slate-800`}
      >
        <div className="flex flex-col space-y-1 font-body">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMenu}
              className={
                isActive(href)
                  ? "text-primary font-bold border-l-4 border-primary pl-3 py-2 bg-surface-container-low block"
                  : "text-slate-600 dark:text-slate-300 pl-3 py-2 hover:text-primary hover:bg-surface-container-low block border-l-4 border-transparent transition-colors"
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/about#contact"
            onClick={toggleMenu}
            className="bg-primary text-on-primary px-6 py-3 mt-4 rounded-md font-headline font-semibold text-base w-full text-center block"
          >
            Yêu cầu báo giá
          </Link>
        </div>
      </div>
    </nav>
  );
}
