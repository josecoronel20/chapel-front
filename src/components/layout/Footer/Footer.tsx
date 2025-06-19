import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="bg-slate-900 text-white py-10 w-full">
      
        <div className="flex flex-col justify-center items-center gap-4 px-4">
          <h2 className="text-2xl font-bold">Contactanos</h2>

          <Link href="https://wa.me/541124748065" className="flex items-center gap-2" target="_blank">
            <Phone className="w-6 h-6" />
            <p className="text-sm">+54 1124748065</p>
            <p className="text-sm">Whatsapp</p>
          </Link>
        </div>
    </section>
  );
};

export default Footer;
