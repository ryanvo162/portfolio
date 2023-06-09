import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className="flex flex-col items-center justify-center w-4/5 mx-auto min-h-screen">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Ryan.</h1>
      </main> */}
      <Intro />
      <Nav />
      <Footer />
    </>
  );
}
