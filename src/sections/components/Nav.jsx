import { useState } from "react";
import { hamburger } from "../../assets/icons";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants";

const Nav = () => {
  const [showDrawer, setShowDrawer] = useState(false);

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
      {showDrawer && (
        <ul className="float-end">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="block py-2 px-4 text-lg text-gray-900 hover:bg-gray-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
