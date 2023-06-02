import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      {/* main min-height 100% page */}
      <main className="flex flex-col items-center justify-center w-4/5 mx-auto my-8 min-h-screen">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Ryan.</h1>
      </main>
      <Footer />
    </>
  );
}
