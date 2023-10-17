"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        onClick={handleNav}
        className="inline-block cursor-pointer lg:hidden"
      >
        <Image src="menu.svg" alt="menu" width={32} height={32} />
      </button>
      <div
        className={
          menuOpen
            ? "h-screen w-screen fixed z-30 bg-white top-0 left-0 transition-all duration-300"
            : "top-0 -left-full transition-all duration-300"
        }
      >
        <button
          onClick={handleNav}
          className="text-2xl font-semibold absolute top-[20px] right-[20px] p-4"
        >
          X
        </button>
        <ul className="h-full flex flex-col justify-center gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
