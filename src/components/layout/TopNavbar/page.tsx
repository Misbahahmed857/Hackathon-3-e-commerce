'use client';
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


const TopNavbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <main>
      {isVisible && (
        <div className="flex items-center justify-center bg-[#000000] h-[38px] w-full pt-3 pb-3 px-2 sm:px-4 md:px-8 gap-2 sm:gap-4 relative">
          <span className="text-[#FFFFFF] mx-0 px-1 text-[10px] sm:text-sm md:text-base">
            Sign up and get 20% off on your first order.
            <a
              className="mx-3 sign-button px-1 text-[9px] sm:text-sm md:text-base"
              href="/auth"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
              onMouseEnter={(e) =>
                (e.target as HTMLElement).style.textDecoration = "none"
              }
              onMouseLeave={(e) =>
                (e.target as HTMLElement).style.textDecoration = "underline"
              }
            >
              Sign Up Now
            </a>
          </span>
          <button
            className="text-[#dfdbdb] hover:text-white font-bold text-xs sm:text-sm md:text-base ml-auto absolute right-[100px]"
            onClick={() => setIsVisible(false)}
          >
            <RxCross2 className="hidden sm:block" />
          </button>
        </div>
      )}
    </main>
  );
};

export default TopNavbar;
