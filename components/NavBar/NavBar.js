import React from "react";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import navBar from "./navBar.module.css";

export default function NavBar() {
  return (
    <nav className={navBar.nav}>
      <ul>
        {navLinks.map((link, index) => {
          return (
            <Link href={link.path} key={index}>
              <li>
                <a href="#">
                  {link.name}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
