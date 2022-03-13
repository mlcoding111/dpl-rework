import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import navBar from "./navBar.module.css";
import { navLinks } from "../../utils/data";
import Logo from "../../public/images/brand.svg";

export default function NavBar() {
  const router = useRouter();

  const [toggled, setToggled] = React.useState(false);


  React.useEffect(()=>{
    let scrolledNav = document.querySelector('#scrolled')
    
    const onScroll = e => {
      let scrollValue = e.target.documentElement.scrollTop
      console.log(scrollValue)
      if(scrollValue > 100){
   
      }
    }
    window.addEventListener('scroll', onScroll)
  },[])

  // Handle mobile nav behaviors
  const toggleOpen = () => {
    !toggled ? setToggled(true) : setToggled(false); // Handle className
    let cc = document.querySelector(`.${navBar.mobileNav} ul`);
    if (toggled) {
      setToggled(false);
      cc.style.left = "-100%";
      cc.style.height = "0px";
    } else {
      setToggled(true);
      cc.style.left = "0";
      cc.style.height = "100%";
    }
  };

  return (
    <>
      <nav className={navBar.nav}>
        <div className={navBar.brand}>
          <Image src={Logo} height={100} width={100} alt="Nav Brand" />
        </div>

        <ul>
          {/* Mobile Nav Toggler */}
          <div
            className={`${navBar.toggler}  ${toggled ? navBar.open : ""}`}
            onClick={toggleOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Desktop Nav */}
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index} activeClassName="active">
                <li className={
                      router.pathname == link.path ? navBar.active : ""
                    }>
                  <a
                    href="#"
                  >
                    {" "}
                    {/* Toggle active class when router path change */}
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
                <li>
                  <a
                    href="#"
                    className={
                      router.pathname == link.path ? navBar.active : ""
                    }
                    onClick={toggleOpen}
                  >
                    {" "}
                    {/* Toggle active class when router path change */}
                    {link.name}
                  </a>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* Scrolled nav */}

    </>
  );
}
