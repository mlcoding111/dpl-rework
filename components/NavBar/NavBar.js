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

  React.useEffect(() => {

    let scrolledNav = document.querySelector("#scrolled");

    const onScroll = (e) => {
      let scrollValue = e.target.documentElement.scrollTop;
      console.log(scrollValue);
      if (scrollValue > 100) {
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  // Handle mobile nav behaviors
  const toggleOpen = () => {
    !toggled ? setToggled(true) : setToggled(false); // Handle className

    const nav = document.querySelector(`.${navBar.navLinks}`)
    const navLinks = document.querySelectorAll(`.${navBar.navLinks} li`)

    nav.classList.toggle(navBar.navActive)

    // navLinks.forEach((link, index) => {
    //   if(link.style.animation){
    //     link.style.animation = ''
    //   }else{
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .5}s`
    //   } 
    // })


  };

  return (
    <>
      <nav className={navBar.nav}>
        <div className={navBar.brand}>
          <Image src={Logo} height={95} width={115} alt="Nav Brand" />
        </div>
        {/* Mobile Nav Toggler */}
        <div
          className={`${navBar.toggler}  ${toggled ? navBar.open : ""}`}
          onClick={toggleOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={navBar.navLinks}>
        <ul>
          {/* Desktop Nav */}
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index} activeClassName="active">
                <li
                  className={router.pathname == link.path ? navBar.active : ""}
                  onClick={toggleOpen}
                >
                  <a href="#">
                    {" "}
                    {/* Toggle active class when router path change */}
                    {link.name}
                  </a>
                </li>
              </Link>
            );
          })}
        </ul>
        </div>

      </nav>

      {/* Scrolled nav */}
    </>
  );
}
