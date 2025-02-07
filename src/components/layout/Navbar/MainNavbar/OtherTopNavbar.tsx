'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

// Define the NavMenu type
export interface NavMenuItem {
  id: number;
  label: string;
  url: string;
}

type NavMenu = NavMenuItem[];

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Toggle Button with custom UI */}
      <button
        onClick={toggleMenu}
        className="cursor-pointer p-2 rounded-md text-white flex items-center justify-center shadow-lg transition duration-300 transform active:scale-95"
      >
        {isMenuOpen ? (
          <Image
            priority
            src="/icons/menu.svg"
            height={20}
            width={20}
            alt="close menu"
            className="max-w-[20px] max-h-[20px]"
          />
        ) : (
          <Image
            priority
            src="/icons/menu.svg"
            height={20}
            width={20}
            alt="open menu"
            className="max-w-[20px] max-h-[20px]"
          />
        )}
      </button>

      {/* Conditionally render the menu */}
      {isMenuOpen && (
        <div
          className="absolute left-0 top-16 w-64 bg-white shadow-lg rounded-lg p-6 z-10 mt-2 transition-all ease-in-out duration-300"
        >
          <div className="mb-6">
            <Link
              href="/"
              className={cn([integralCF.className, "text-3xl font-bold text-gray-800"])}
            >
              SHOP.CO
            </Link>
          </div>

          <div className="flex flex-col items-start">
            {data.map((item) => (
              <Link
                key={item.id}
                href={item.url ?? "/"}
                className="text-lg text-gray-700 mb-4 hover:text-blue-500 transition duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResTopNavbar;