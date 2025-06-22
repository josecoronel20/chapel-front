"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTripleClick = () => {
    if (!mounted) return;
    
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        router.push("/login-chapel");
      }
      return newCount;
    });
  
    setTimeout(() => {
      setCount(0);
    }, 2000);
  };
  

  return (
    <div className="flex items-center gap-1 relative z-40">
      <Image
        src="/chapelLogo-removebg-preview.png"
        alt="Chapel Futbol"
        width={48}
        height={48}
        onClick={handleTripleClick}
        className="cursor-pointer"
      />

      <Link href="/" className="text-xl font-semibold cursor-pointer">
        Chapel Futbol
      </Link>
    </div>
  );
};

export default Logo;
