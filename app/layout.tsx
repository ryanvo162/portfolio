import { MenuContextProvider } from "@/context/menu";
import "./globals.css";
import { Raleway } from "next/font/google";

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
        <MenuContextProvider>{children}</MenuContextProvider>
      </body>
    </html>
  );
}
