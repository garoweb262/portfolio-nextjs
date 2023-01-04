import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link className="" href="/">
          <h1 className="font-bold text-4xl">Garoweb</h1>
        </Link>
        <ul className="">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/">About</Link>
          </li>
          <li className="">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* mobile button */}
        <div className="">
          <AiOutlineMenu size={30} />
        </div>
        {/* mobile menu */}
        <div className="">
          <ul className="">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/">About</Link>
            </li>
            <li className="">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
