"use client";

import { MenuContext } from "@/context/menu";
import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@/icons/close";
import { HEADER_NAV } from "@/constants/nav";
import { ThemeContext } from "@/context/theme";

export default function Nav() {
  const { state, dispatch } = useContext(MenuContext);
  const { state: theme } = useContext(ThemeContext);
  // setup motion for animation, when menu open, it will slide in from right
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    // nav display none on desktop, and tablet landscape, it is menu on mobile. 3/4 screen and overlay
    <motion.nav
      initial="closed"
      animate={state.open ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
      className="fixed inset-y-0 right-0 flex flex-col items-center justify-center w-full px-4 py-6 bg-white shadow-md sm:hidden dark:bg-black"
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <h1 className="text-2xl font-bold">Ryan&#39;s Portfolio</h1>
        </Link>
        <button
          type="button"
          className="p-2 text-gray-500 bg-white dark:bg-black dark:text-white"
          onClick={() => dispatch({ type: "CLOSE_MENU" })}
        >
          <span className="sr-only">Close main menu</span>
          <CloseIcon style={{ stroke: theme === "dark" ? "#fff" : "#000", width:24, height:24 }} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 px-4 mt-6">
        {HEADER_NAV.map((nav) => (
          //  if first p not have margin top, the rest have margin top
          <Link
            href={nav.path}
            key={nav.path}
            onClick={() => dispatch({ type: "CLOSE_MENU" })}
          >
            {nav.path === "/" ? (
              <p className="text-2xl font-bold">{nav.name}</p>
            ) : (
              <p className="mt-3 text-2xl font-bold">{nav.name}</p>
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
