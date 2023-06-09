import { MenuContextProvider } from "@/context/menu";
import { ThemeContextProvider } from "@/context/theme";
import { Raleway } from "next/font/google";
import Image from "next/image";
import "./globals.css";

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
        <div className="min-w-full min-h-full fixed z-[-1] opacity-5 object-cover">
          <Image src="/bg.gif" alt="bg" fill />
        </div>
        <ThemeContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
