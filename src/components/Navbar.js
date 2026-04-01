"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-4 text-3xl font-bold tracking-tight text-primary dark:text-white font-headline">
          <Image
            src="/Images/logo.png"
            width={40}
            height={40}
            alt="Logo Fabricon"
            className="h-10"
            priority
          />
          Fabricon
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary dark:text-blue-400 font-bold border-b-2 border-primary dark:border-blue-400 pb-1 text-base font-medium font-body"
            href="#"
          >
            Trang chủ
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-base font-medium font-body"
            href="/about"
          >
            Giới thiệu
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-base font-medium font-body"
            href="/services"
          >
            Dịch vụ
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-base font-medium font-body"
            href="/products"
          >
            Sản phẩm
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-base font-medium font-body"
            href="#contact"
          >
            Liên hệ
          </a>
        </div>
        <div className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-semibold text-base hover:scale-95 duration-200 ease-in-out transition-all">
            Yêu cầu báo giá
          </button>
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
        <div className="flex flex-col space-y-4 font-body">
          <a
            href="/"
            className="text-primary font-bold border-b-2 border-primary pb-1 inline-block w-fit"
            onClick={toggleMenu}
          >
            Trang chủ
          </a>
          <a
            href="/about"
            className="text-slate-600 dark:text-slate-300 py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Giới thiệu
          </a>
          <a
            href="/services"
            className="text-slate-600 dark:text-slate-300 py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Dịch vụ
          </a>
          <a
            href="/products"
            className="text-slate-600 dark:text-slate-300 py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Sản phẩm
          </a>
          <a
            href="#contact"
            className="text-slate-600 dark:text-slate-300 py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Liên hệ
          </a>
          <button className="bg-primary text-on-primary px-6 py-3 mt-4 rounded-md font-headline font-semibold text-sm w-full">
            Yêu cầu báo giá
          </button>
        </div>
      </div>
    </nav>
  );
}
