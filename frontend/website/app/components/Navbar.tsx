"use client";
import Image from "next/image";
import Logo from "../../public/vercel.svg";
import { motion } from "motion/react";
import { useState } from "react";
import Locate from "@/assets/svgs/Locate";
import ChevronDown from "@/assets/svgs/Chevron-Down";
import Search from "@/assets/svgs/Search";
import TypingText from "./utils/TypingText";
import Cart from "@/assets/svgs/Cart";
import UserCircle from "@/assets/svgs/User-Circle";

const navItems = ["Revamp", "Native", "Beauty"];

function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="shadow-sm px-3 py-4 flex items-center justify-between">
      <div className="flex items-center gap-1 cursor-pointer">
        <Image
          className="bg-black/90 p-1 rounded-md"
          src={Logo}
          width={30}
          height={30}
          alt="UC-Clone"
        />
        <div className="flex flex-col items-start tracking-tight -space-y-3">
          <div className="text-lg font-semibold">Urban</div>
          <div className="text-base">Company</div>
        </div>
      </div>

      <div className="relative flex items-center space-x-2 text-sm text-neutral-500">
        {navItems.map((item) => (
          <div
            key={item}
            className="relative px-3 py-2 cursor-pointer"
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
          >
            {active === item && (
              <motion.div
                layoutId="hover-bg"
                className="absolute inset-0 rounded-md bg-gray-100"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 90,
                }}
              />
            )}

            <span className="relative z-10">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        {/* Location */}
        <div className="border border-neutral-300 rounded-md p-2 flex items-center justify-between space-x-4">
          <Locate />
          <span className="text-neutral-400 text-sm">
            {"Bhagalpur , Bihar ..."}
          </span>
          <ChevronDown />
        </div>
        <div className="border border-neutral-300 rounded-md p-2 flex items-center space-x-4 w-72">
          <Search />
          <span className="text-neutral-400 text-sm flex-1 flex-row items-center">
            {"Search for "}
            <TypingText
              texts={["Facial", "Kitchen Cleaning", "AC Service", "Mechanics"]}
            />
          </span>
        </div>
      </div>

      <div className="flex flex-row space-x-4 items-center">
        <div className="p-2 border-3 border-neutral-200 rounded-full">
          <Cart />
        </div>
        <div>
          <UserCircle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
