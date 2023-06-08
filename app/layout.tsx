import { MenuContextProvider } from "@/context/menu";
import "./globals.css";
import { Raleway } from "next/font/google";
import { ThemeContext, ThemeContextProvider } from "@/context/theme";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ryan's Portfolio",
    template: "%s | Ryan's Portfolio",
  },
  description: "Hi, I'm Ryan. I'm a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className} suppressHydrationWarning>
        <div className="min-w-full min-h-full fixed z-[-1] opacity-10 object-cover">
          <Image src="/bg.gif" alt="bg" fill />
        </div>
        <ThemeContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
