"use client";

import { MenuContext } from "@/context/menu";
import { ThemeContext } from "@/context/theme";
import MenuIcon from "@/icons/menu";
import Link from "next/link";
import { useContext } from "react";

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
    // header display:none on desktop, and tablet landscape and it will be have logo on left and menu on right, fixed on scroll on mobile
    <header className="fixed inset-x-0 top-0 flex items-center justify-between px-4 py-4 bg-white shadow-md sm:hidden dark:bg-black">
      <Link href="/">
        <h1 className="text-2xl font-bold">Ryan&#39;s Portfolio</h1>
      </Link>
      <button
        type="button"
        className="p-2 text-gray-500 bg-white dark:bg-black dark:text-white"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon style={{ stroke: theme === "dark" ? "#fff" : "#000", width:24, height:24 }} />
      </button>
    </header>
  );
}
