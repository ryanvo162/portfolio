"use client";

import { MenuContext } from "@/context/menu";
import { ThemeContext } from "@/context/theme";
import MenuIcon from "@/icons/menu";
import Link from "next/link";
import { useContext } from "react";
import { Lexend_Deca } from "next/font/google";
import { HEADER_NAV } from "@/constants/nav";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export default function Header() {
  const { state, dispatch } = useContext(MenuContext);
  const { state: theme } = useContext(ThemeContext);

  const toggleMenu = () => {
    if (state.open) {
      dispatch({ type: "CLOSE_MENU" });
    } else {
      dispatch({ type: "OPEN_MENU" });
    }
  };
  return (
    <header
      className="fixed inset-x-0 top-0 flex items-center justify-between
    px-5 py-5 lg:w-2/3 lg:mx-auto lg:px-6 lg:py-6"
    >
      <Link href="/">
        <h1
          className={
            lexendDeca.className +
            " text-3xl tracking-tighter select-none 2xl:text-4xl"
          }
        >
          Ryan
          <span
            className="text-primary-500
           dark:text-primary-400"
          >
            V
          </span>
        </h1>
      </Link>
      <nav className="hidden lg:flex lg:items-center lg:justify-center">
        {HEADER_NAV.map((nav) => (
          <Link href={nav.path} key={nav.path}>
            <p className="ml-10 font-medium cursor-pointer 2xl:text-lg">
              {nav.name}
            </p>
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="hidden lg:block font-semibold rounded-2xl
        text-white px-8 py-2.5 bg-gray-600 dark:bg-gray-900 dark:text-white
        hover:bg-black hover:text-white transition duration-200 ease-in-out
        dark:hover:bg-white dark:hover:text-black
        2xl:text-lg 2xl:px-8 2xl:py-2"
      >
        Let&#39;s talk
      </Link>

      <button
        type="button"
        className="p-2 text-gray-500 bg-white dark:bg-black dark:text-white lg:hidden"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon
          style={{
            stroke: theme === "dark" ? "#fff" : "#000",
            width: 24,
            height: 24,
          }}
        />
      </button>
    </header>
  );
}
