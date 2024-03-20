import { useEffect, useRef, useState } from "react";
import { hamburger } from "../../assets/icons";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants";

const Nav = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const sideNavRef = useRef();

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="max-lg:block hidden cursor-pointer"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
      <div
        className={`sidenav h-full fixed z-10 top-0 right-0 bg-slate-500 pt-16 transition-all duration-300 ease-in-out ${
          showDrawer ? "w-64" : "w-0"
        }`}
        ref={sideNavRef}
      >
        <a
          className={
            showDrawer
              ? `absolute top-5 right-10 text-3xl text-white hover:text-slate-300 font-montserrat cursor-pointer transition-all duration-300 ease-in-out`
              : `hidden`
          }
          onClick={() => setShowDrawer(!showDrawer)}
        >
          &times;
        </a>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="flex py-2 px-6 max-md:px-10 text-lg text-white hover:text-slate-300 font-montserrat"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
