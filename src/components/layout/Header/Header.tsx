"use client";

import React from "react";
import MenuNav from "./components/MenuNav";
import Logo from "./components/Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed z-50 w-full bg-primary-dark text-text-light p-2">
      <Logo />

      <MenuNav />
    </header>
  );
};

export default Header;
