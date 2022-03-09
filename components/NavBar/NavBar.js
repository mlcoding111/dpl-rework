import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router';

import navBar from "./navBar.module.css";
import { navLinks } from "../../utils/data";
import Logo from '../../public/images/asset.svg'

export default function NavBar() {
  const router = useRouter();

  const [toggled, setToggled] = React.useState(false)

  // Handle mobile nav behaviors
  const toggleOpen = () => {
    !toggled ? setToggled(true) : setToggled(false) // Handle className
    let cc = document.querySelector(`.${navBar.mobileNav} ul`)
    console.log(cc)

    if(toggled){
      setToggled(false)
      cc.style.left = "-100%"
    }else{
      setToggled(true)
      cc.style.left = "0"
    }

  }
  return (
    <div className={navBar.wrapper}>
    <nav className={navBar.nav}>

    <div className={navBar.brand}>
          <Image src={Logo} height={100} width={100} />
    </div>

      <ul>
        {/* Mobile Nav Toggler */}
        <div className={`${navBar.toggler}  ${toggled ? navBar.open : ''}`} onClick={toggleOpen}>
              <span></span>
              <span></span>
              <span></span>
        </div>

        {/* Desktop Nav */}
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

     {/* Mobile Nav */}
    <nav className={navBar.mobileNav}>
      <ul>
        {navLinks.map((link, index) => {
          return (
            <Link href={link.path} key={index} activeClassName="active">
              <li >
                <a href="#" className={router.pathname == link.path ? navBar.active : ""} onClick={toggleOpen}> {/* Toggle active class when router path change */ }
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
