"use client";

import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<{
  state: 'light' | 'dark';
  dispatch: (theme: 'light' | 'dark') => void;
}>({ state: 'light', dispatch: () => null });

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    console.log("ThemeContextProvider useEffect called");
    // Get the stored theme state from localStorage
    const storedTheme = localStorage.getItem('theme');

    // Set the initial theme state based on the stored value
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setState(storedTheme);
    } else {
      const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setState(darkSchemeQuery.matches ? 'dark' : 'light');
    }

    const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateColorScheme = () => {
      console.log("updateColorScheme called", darkSchemeQuery.matches);
      setState(darkSchemeQuery.matches ? 'dark' : 'light');
    };

    updateColorScheme();
    darkSchemeQuery.addEventListener('change', updateColorScheme);

    return () => {
      darkSchemeQuery.removeEventListener('change', updateColorScheme);
    };
  }, []);

  // Update the theme state and store the new value in localStorage
  const handleSetTheme = (theme: 'light' | 'dark') => {
    console.log("handleSetTheme called", theme);
    setState(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ state, dispatch: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
