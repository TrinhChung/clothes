"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="row-start-1 w-full flex justify-between items-center bg-[var(--background)] shadow-md p-4 fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/Images/logo.png"
          width={40}
          height={40}
          alt="Logo Lan Chuẩn Clothes - Xưởng may chuyên nghiệp"
          className="h-10"
          priority
        />
        <span className="text-xl font-bold text-[var(--main-yellow)] uppercase">
          Lan Chuẩn
        </span>
      </div>

      {/* Desktop Navbar Links */}
      <ul className="flex gap-8 text-[var(--main-green)] font-medium pr-[30px] hidden sm:flex">
        <li>
          <a href="/" className="hover:text-[var(--main-yellow)]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[var(--main-yellow)]">
            Giới thiệu
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-[var(--main-yellow)]">
            Sản phẩm
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[var(--main-yellow)]">
            Liên hệ
          </a>
        </li>
      </ul>

      {/* Mobile Navbar toggle */}
      <button
        className="sm:hidden text-[var(--main-yellow)]"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-16 left-0 w-full bg-[var(--background)] p-4 shadow-md`}
      >
        <li>
          <a
            href="/"
            className="block text-[var(--main-green)] hover:text-[var(--main-yellow)] py-2"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block text-[var(--main-green)] hover:text-[var(--main-yellow)] py-2"
          >
            Giới thiệu
          </a>
        </li>
        <li>
          <a
            href="#products"
            className="block text-[var(--main-green)] hover:text-[var(--main-yellow)] py-2"
          >
            Sản phẩm
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block text-[var(--main-green)] hover:text-[var(--main-yellow)] py-2"
          >
            Liên hệ
          </a>
        </li>
      </ul>
    </nav>
  );
}
