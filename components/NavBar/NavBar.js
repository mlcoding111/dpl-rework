import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import navBar from "./navBar.module.css";
import { navLinks } from "../../utils/data";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className={navBar.wrapper}>
    <nav className={navBar.nav}>
      <ul>
        {navLinks.map((link, index) => {
          return (
            <Link href={link.path} key={index} activeClassName="active">
              <li >
                <a href="#" className={router.pathname == link.path ? navBar.active : ""}> {/* Toggle active class when router path change */ }
                  {link.name}
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
    </div>
  );
}
