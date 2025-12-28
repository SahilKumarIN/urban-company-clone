"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Locate from "@/assets/svgs/Locate";
import ChevronDown from "@/assets/svgs/Chevron-Down";
import Search from "@/assets/svgs/Search";
import TypingText from "./utils/TypingText";
import Cart from "@/assets/svgs/Cart";
import UserCircle from "@/assets/svgs/User-Circle";

const navItems = ["Revamp", "Native", "Beauty"];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            className="bg-black rounded-lg p-1.5"
            src={"/logo.jpeg"}
            width={84}
            height={36}
            alt="Home Eaze"
          />
          <div className="leading-tight flex flex-row items-center">
            <div className="text-lg font-bold">Home</div>
            <div className="text-lg font-semibold text-neutral-600">Eaze</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm text-neutral-600">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative px-4 py-2 rounded-lg cursor-pointer"
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
            >
              {active === item && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-neutral-100 rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </div>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 bg-white shadow-sm">
            <Locate />
            <span className="text-sm text-neutral-500">Bhagalpur, Bihar</span>
            <ChevronDown />
          </div>

          <div className="flex items-center gap-3 px-4 py-2 w-72 rounded-xl border border-neutral-200 bg-white shadow-sm">
            <Search />
            <span className="text-sm text-neutral-400">
              Search for{" "}
              <TypingText
                texts={[
                  "Facial",
                  "Kitchen Cleaning",
                  "AC Service",
                  "Mechanics",
                ]}
              />
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex p-2 rounded-full border border-neutral-200 bg-white shadow-sm">
            <Cart />
          </div>
          <div className="hidden md:flex ">
            <UserCircle />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white shadow-sm"
          >
            <span className="text-xl">≡</span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3 space-y-2">
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-neutral-200 bg-white shadow-sm">
          <Search />
          <span className="text-sm text-neutral-400 flex-1">
            Search for{" "}
            <TypingText
              texts={["Facial", "Kitchen Cleaning", "AC Service", "AC Repair"]}
            />
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600 border border-neutral-200 p-2 rounded-md bg-white shadow-md justify-between">
          <Locate />
          <span className="flex-1">Bhagalpur, Bihar</span>
          <ChevronDown />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden px-6 pb-6 space-y-5 bg-white"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="py-2 px-3 rounded-lg text-neutral-800 hover:bg-neutral-100 transition"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-3">
              <div className="p-2 rounded-full border border-neutral-200 bg-white shadow-sm">
                <Cart />
              </div>
              <div className="">
                <UserCircle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
