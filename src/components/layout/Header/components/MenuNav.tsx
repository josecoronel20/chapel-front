import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Jugadores",
      href: "/players",
    },
    {
      label: "Contacto",
      href: "#footer",
    },
  ];

  const LinkComponent = ({ label, href }: { label: string; href: string }) => {
    return (
      <li
        className="hover:text-violet-600 ease-in-out duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link href={href}>{label}</Link>
      </li>
    );
  };

  return (
    <div>
      <span
        className="md:hidden z-40 relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon className="text-text-light" /> : <MenuIcon className="text-text-light" />}
      </span>

      
        <ul className={`z-30 flex flex-col justify-center items-center gap-4 fixed top-0 left-0 w-full h-screen bg-primary-dark md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
          {navLinks.map((link) => {
            return (
              <LinkComponent
                key={link.href}
                label={link.label}
                href={link.href}
              />
            );
          })}
        </ul>
      

      <ul className="hidden md:flex gap-4">
        {navLinks.map((link) => {
          return (
            <LinkComponent
              key={link.href}
              label={link.label}
              href={link.href}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MenuNav;
