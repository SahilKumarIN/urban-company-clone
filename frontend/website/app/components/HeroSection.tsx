import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Insta Help",
    icon: "https://images.unsplash.com/vector-1761642042100-09005bbc4ca1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlbHBpbmd8ZW58MHx8MHx8fDA%3D",
    badge: "NEW",
  },
  {
    title: "Women's Salon & Spa",
    icon: "",
  },
  { title: "Men's Salon & Massage", icon: "/icons/men-salon.png" },
  { title: "Cleaning & Pest Control", icon: "/icons/cleaning.png" },
  { title: "Electrician, Plumber & Carpenter", icon: "/icons/electrician.png" },
  { title: "Native Water Purifier", icon: "/icons/water.png" },
  { title: "Painting & Waterproofing", icon: "/icons/painting.png" },
  { title: "AC & Appliance Repair", icon: "/icons/ac.png" },
  { title: "Wall makeover by Revamp", icon: "/icons/wall.png" },
];

const images = [
  "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=1200&auto=format&fit=crop",
];

function HeroSection() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-14">
        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-4xl font-semibold leading-tight mb-8">
            Home services at your
            <br />
            doorstep
          </h1>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6">
            <p className="text-lg font-medium mb-6">
              What are you looking for?
            </p>

            <div className="grid grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-2 cursor-pointer group"
                >
                  <div className="relative w-14 h-14">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                    {item.badge && (
                      <span className="absolute -top-2 -right-4 text-[10px] bg-purple-600 text-white px-2 py-[2px] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-neutral-700 group-hover:text-black">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – EXACT UC BENTO */}
        <div className="flex-1 h-[520px] grid grid-cols-3 grid-rows-2 gap-4">
          <div className="relative col-span-1 row-span-2 rounded-3xl overflow-hidden">
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative col-span-2 row-span-1 rounded-3xl overflow-hidden">
            <Image src={images[1]} alt="" fill className="object-cover" />
          </div>

          <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden">
            <Image src={images[2]} alt="" fill className="object-cover" />
          </div>

          <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden">
            <Image src={images[3]} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
