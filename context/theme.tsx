"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext<{
  state: "light" | "dark";
  dispatch: (theme: "light" | "dark") => void;
}>({ state: "light", dispatch: () => null });

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setState(storedTheme);
    } else {
      const darkSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setState(darkSchemeQuery.matches ? "dark" : "light");
    }

    const darkSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateColorScheme = () => {
      setState(darkSchemeQuery.matches ? "dark" : "light");
    };

    updateColorScheme();
    darkSchemeQuery.addEventListener("change", updateColorScheme);

    return () => {
      darkSchemeQuery.removeEventListener("change", updateColorScheme);
    };
  }, []);

  const handleSetTheme = (theme: "light" | "dark") => {
    setState(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ state, dispatch: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
