import React from "react";
import { NavLinks } from "./";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleNavigation } from "../actions/settings";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="bg-black md:h-20 relative">
      <div className="container py-4 mx-auto flex justify-between lg:grid lg:grid-cols-3 lg:items-center lg:py-0 lg:h-full">
        <h1 className="text-3xl text-center text-white leading-none cursor-default md:text-3xl md:col-start-2">
          <Link to="/">Missing Pets Malta</Link>
        </h1>

        {/* Mobile nav icon */}
        <BiMenu
          className="text-white text-3xl md:hidden "
          onClick={() => dispatch(toggleNavigation())}
        />

        {/* Desktop nav */}
        <nav className="hidden md:block md:justify-self-end">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
