import React, { useState } from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";
import Button from "../Button";
dom.watch();

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <div>
      <nav>
        <section
          className={
            navbar
              ? "fixed flex justify-between flex-row  items-center inset-x-0  bottom-0 w-full bg-indigo-900 lg:top-0 lg:h-16  z-50 transition duration-500 lg:bg-indigo-900 navbar text-gray-100"
              : "fixed flex justify-between flex-row  items-center inset-x-0  bottom-0 w-full bg-indigo-900 lg:top-0 lg:h-16 z-50 transition duration-500 lg:bg-transparent"
          }
        >
          <Button
            type="link"
            className="logo text-3xl font-semibold tracking-widest text-gray-100 uppercase rounded-lg hidden lg:inline-block px-20 "
          >
            <span className="hover-underline">Bionist</span>
          </Button>
          <ul id="menu" className="flex flex-row lg:mx-16  mx-auto">
            <li className=" sm-nav ">
              <div className="icon-wrapper">
                <Button type="link">
                  <span className="lg:hidden">
                    <i className="fas fa-home" />
                  </span>

                  <span className="hover-underline block text-xs lg:text-2xl">
                    Home
                  </span>
                </Button>
              </div>
            </li>
            <li className="sm-nav">
              <div iv className="icon-wrapper">
                <Button type="link">
                  <span className="lg:hidden">
                    <i className="fas fa-gamepad" />
                  </span>
                  <span className="hover-underline  block text-xs lg:text-2xl">
                    Games
                  </span>
                </Button>
              </div>
            </li>
            <li className="sm-nav">
              <div className="icon-wrapper">
                <Button type="link">
                  <span className="lg:hidden">
                    <i className="fas fa-shopping-bag" />
                  </span>
                  <span className="hover-underline block text-xs lg:text-2xl">
                    Shop
                  </span>
                </Button>
              </div>
            </li>
            <li className="sm-nav">
              <div className="icon-wrapper">
                <Button type="link">
                  <div className="lg:hidden">
                    <i className="fas fa-sliders-h" />
                  </div>
                  <span className="hover-underline block text-xs lg:text-2xl">
                    Settings
                  </span>
                </Button>
              </div>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}
