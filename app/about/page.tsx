import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-4/5 mx-auto my-8 min-h-screen">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Ryan.</h1>
      </main>
      <Nav />
      <Footer />
    </>
  );
}