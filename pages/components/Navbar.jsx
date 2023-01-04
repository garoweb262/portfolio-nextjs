import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="">
      <div className="">
        <Link className="" href="/">
          <h1 className="">Garoweb</h1>
        </Link>
        <ul className="">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/">About</Link>
          </li>
          <li className="">
            <Link href="/">Gallery</Link>
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
  );
};

export default Navbar;
