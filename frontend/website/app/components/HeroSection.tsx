import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Insta Help",
    icon: "https://images.unsplash.com/vector-1761642042100-09005bbc4ca1?w=600&auto=format&fit=crop",
    badge: "NEW",
  },
  {
    title: "Women's Salon & Spa",
    icon: "https://images.unsplash.com/vector-1758528899211-5f7f504ce153?w=600&auto=format&fit=crop",
  },
  {
    title: "Men's Salon & Massage",
    icon: "https://images.unsplash.com/vector-1764926759171-3d85fcb20e7d?w=600&auto=format&fit=crop",
  },
  {
    title: "Cleaning & Pest Control",
    icon: "https://images.unsplash.com/vector-1753864810028-4322e1f2130f?w=600&auto=format&fit=crop",
  },
  {
    title: "Electrician, Plumber & Carpenter",
    icon: "https://images.unsplash.com/vector-1763972891926-03fa4a166cac?w=600&auto=format&fit=crop",
  },
  {
    title: "Water Purifier",
    icon: "https://images.unsplash.com/vector-1756381489500-b03dcbf45aab?w=600&auto=format&fit=crop",
  },
  {
    title: "Painting",
    icon: "https://images.unsplash.com/photo-1693985120993-e9b203ce7631?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "AC Repair",
    icon: "https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?q=80&w=600&auto=format&fit=crop",
  },
];

const images = [
  "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=1400&auto=format&fit=crop",
];

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-6 py-12 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
            Home services,
            <br />
            <span className="text-neutral-500">delivered to you</span>
          </h1>

          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-sm border border-neutral-200 p-6">
            <p className="text-lg font-medium mb-6">
              What are you looking for?
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 text-center cursor-pointer group"
                >
                  <div className="relative w-14 h-14 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 transition">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                    {item.badge && (
                      <span className="absolute -top-2 -right-3 text-[10px] bg-purple-600 text-white px-2 py-[2px] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm sm:text-[15px] text-neutral-700 leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 lg:h-[520px] lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative h-[200px] lg:h-auto col-span-2 lg:col-span-1 lg:row-span-2 rounded-3xl overflow-hidden">
              <Image src={images[0]} alt="" fill className="object-cover" />
            </div>

            <div className="relative h-[200px] lg:h-auto rounded-3xl overflow-hidden">
              <Image src={images[1]} alt="" fill className="object-cover" />
            </div>

            <div className="relative h-[200px] lg:h-auto rounded-3xl overflow-hidden">
              <Image src={images[2]} alt="" fill className="object-cover" />
            </div>

            <div className="relative w-[400px] md:w-[350px] h-[200px] lg:h-auto rounded-3xl overflow-hidden  lg:block">
              <Image src={images[3]} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
