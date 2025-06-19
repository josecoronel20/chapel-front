"use client";

import React from "react";
import MenuNav from "./components/MenuNav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed z-50 w-full bg-primary-dark text-text-light p-2">
      <div className="flex items-center gap-1 relative z-40">
        <Image
          src="/chapelLogo-removebg-preview.png"
          alt="Chapel Futbol"
          width={48}
          height={48}
        />

        <Link
          href="/"
          className="text-xl font-semibold cursor-pointer"
        >
          Chapel Futbol
        </Link>
      </div>

      <MenuNav />
    </header>
  );
};

export default Header;
