'use client';

import { MenuContext } from "@/context/menu";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const { state, dispatch } = useContext(MenuContext);
  const toggleMenu = () => {
    if (state.open) {
      dispatch({ type: "CLOSE_MENU" });
    } else {
      dispatch({ type: "OPEN_MENU" });
    }
  };
  return (
    // header display:none on desktop, and tablet landscape and it will be have logo on left and menu on right, fixed on scroll on mobile
    <header className="fixed inset-x-0 top-0 flex items-center justify-between px-4 py-4 bg-white shadow-md sm:hidden">
      <Link href="/">
        <h1 className="text-2xl font-bold">Ryan&#39;s Portfolio</h1>
      </Link>
      <button
        type="button"
        className="p-2 text-gray-500 bg-white"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000000"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
    </header>
  );
}
