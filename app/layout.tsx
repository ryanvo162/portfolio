import { MenuContextProvider } from "@/context/menu";
import "./globals.css";
import { Raleway } from "next/font/google";
import { ThemeContext, ThemeContextProvider } from "@/context/theme";

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
        <ThemeContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
