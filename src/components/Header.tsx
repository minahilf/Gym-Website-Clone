"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { Crimson_Text } from "next/font/google";
import logo from "../../Public/logo.png" 
import Link from "next/link";

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-crimson" });


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${crimson.variable} font-crimson bg-black text-white`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={100} height={100} className="lg:w-[100px] lg:h-[40px]"/>

        {/* Hamburger Menu (Visible on Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Links (Visible on Medium & Larger Screens) */}
        <ul className="hidden md:flex space-x-6 text-lg">
        <Link href="/" >  <li className="hover:text-[#FCF43D] cursor-pointer">Home</li></Link>
        <Link href="/Facilities" >   <li className="hover:text-[#FCF43D] cursor-pointer">About</li></Link>
         <Link href="/Family" >   <li className="hover:text-[#FCF43D] cursor-pointer">Reviews</li></Link>
         <Link href="/Services" >  <li className="hover:text-[#FCF43D] cursor-pointer">Services</li></Link>
         <Link href="/Contact" > <li className="hover:text-[#FCF43D] cursor-pointer">Contact</li></Link>
        </ul>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black text-white text-lg space-y-4 py-4 px-6">
         <Link href="/" ><li className="hover:text-[#FCF43D] cursor-pointer">Home</li></Link>
          <Link href="/Facilities" > <li className="hover:text-[#FCF43D] cursor-pointer">About</li></Link>
          <Link href="/Family" ><li className="hover:text-[#FCF43D] cursor-pointer">Reviews</li></Link>
          <Link href="/Services" >   <li className="hover:text-[#FCF43D] cursor-pointer">Services</li></Link>
          <Link href="/Contact" >   <li className="hover:text-[#FCF43D] cursor-pointer">Contact</li></Link>
        </ul>
      )}
    </nav>
  );
}
