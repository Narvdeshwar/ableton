"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const topbardata = [
  { name: "home", link: "/" },
  { name: "live", link: "/live" },
  { name: "move", link: "/move" },
  { name: "link", link: "/link" },
  { name: "shop", link: "/shop" },
  { name: "packs", link: "/pack" },
  { name: "help", link: "/help" },
  { name: "more +", link: "/more" },
];

// RouteAddress Component (Re-usable)
const RouteAddress = ({
  title,
  link,
  className = "", // Default empty class
}: {
  title: string;
  link: string;
  className?: string;
}) => {

  const isActive = usePathname() === link
  return (
    <Link href={link} className={`px-4 font-medium capitalize transform transition-transform duration-500 hover:scale-125 ${className} ${isActive ? "text-orange-500" : "text-black"}`}>
      {title}
    </Link>
  );
};

function Navbar() {
  return (
    <div className="navbar bg-white flex items-center border-b shadow-md py-3 px-6 sticky">
      {/* Logo Section */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/">
          <img
            src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg"
            alt="logo"
            className="h-8 cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-1 justify-center space-x-6">
        {topbardata.map((item, index) => (
          <RouteAddress key={index} title={item.name} link={item.link} />
        ))}
      </div>

      {/* Login Section */}
      <div className="flex items-center space-x-4">
        <RouteAddress title="Try live for 12 for free" link="/tryforfree" className="text-blue-600 font-semibold" />
        <RouteAddress title="Log in or Register" link="/login" className="text-gray-800 font-semibold" />
      </div>
    </div>
  );
}

export default Navbar;
