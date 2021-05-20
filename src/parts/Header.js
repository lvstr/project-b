/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/images/hero/header.jpg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <div>
      <div>
        <header>
          <Navbar />
          <section id="userAccount" className="lg:hidden bg-indigo-900 h-48">
            <div className="flex justify-between">
              <div className="mt-14 ml-6">
                <h2 className="text-2xl text-gray-100">
                  Gamertag{" "}
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-red-600 rounded-full">
                    VIP
                  </span>
                </h2>
                <span className="text-xs text-gray-100 font-light">
                  ID: 27152
                </span>
              </div>

              <div className="mt-10 mr-6">
                <img
                  src="https://billatowing.com/wp-content/uploads/2016/06/team-1.jpg"
                  alt=""
                  className="rounded-full h-16 w-16"
                />
              </div>
            </div>
            <div className="w-11/12 mt-3 mx-auto">
              <hr className="border-gray-100 " />
              <div id="category" className="mt-3 flex gap-2">
                <Button className="bg-white bg-opacity-25 text-gray-100 py-1 px-1 rounded  leading-none flex items-center border-none">
                  <span className="inline-flex items-center justify-center px-2 text-xs font-light leading-none text-gray-100 bg-gray-200 bg-opacity-25 rounded">
                    Hardcore
                  </span>
                </Button>
                <Button className="bg-white bg-opacity-25 text-gray-100 py-1 px-1 rounded  leading-none flex items-center ">
                  <span className="inline-flex items-center justify-center px-2 text-xs font-light leading-none text-gray-100 bg-gray-200 bg-opacity-25 rounded ">
                    Adventure
                  </span>
                </Button>
                <Button className="bg-white bg-opacity-25 text-gray-100 py-1 px-1 rounded  leading-none flex items-center">
                  <span className="inline-flex items-center justify-center px-2 text-xs font-light leading-none text-gray-100 bg-gray-200 bg-opacity-25 rounded">
                    Sultan
                  </span>
                </Button>
              </div>
            </div>
          </section>

          <img
            src={Logo}
            className="hidden lg:inline-block h-50 lg:h-48 w-full overflow-hidden object-cover"
            alt=""
          />
          <div
            id="separator"
            className="hidden lg:flex lg:flex-row text-center lg:justify-center bg-indigo-900 w-full h-14 gap-4"
          >
            <Button type="link" href="#" className="font-light my-auto">
              IP:
              <span className="text-yellow-600"> play.bionist.net</span>
            </Button>
            <Button
              type="link"
              isExternal
              href="minecraft://?addExternalServer=Bionist|play.bionist.net:19132"
              isPrimary
              hasHover
              className="p-3 font-light"
            >
              <span className="pr-2">
                <i className="fas fa-gamepad" />
              </span>
              Play Now
            </Button>
            <h3 className="my-auto font-light">
              {" "}
              <span className="text-yellow-600 ">212</span> Players Online
            </h3>
          </div>
        </header>
      </div>
      <div></div>
    </div>
  );
}
