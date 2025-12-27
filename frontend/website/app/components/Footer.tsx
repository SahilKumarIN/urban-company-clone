import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="px-4 py-4 bg-neutral-200">
      <div className="flex flex-row space-x-2 items-center">
        <Image
          src="/logo.jpeg"
          width={84}
          height={36}
          className="rounded-md"
          alt="HomeEaze"
        />
        <div>
          <span className="font-bold text-lg">Home</span>
          <span className="font-semibold text-neutral-800">Eaze</span>
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div className="text-center text-xs text-neutral-400">
        All Rights Reserved &copy;2025 <br />
        Kumar Rajvansh &amp; Sahil Kumar
      </div>
    </div>
  );
}

export default Footer;
