// "use client";

import Image from "next/image";
import Link from "next/link";
// import { useCallback, useEffect, useRef } from "react";

export default function Intro() {
  // const ref = useRef<HTMLDivElement | null>(null);

  // const handleLoad = useCallback(() => {
  //   console.log(ref.current);
  //     ref.current?.classList.add("loaded");
  //   //   remove background image of the div
  //       ref.current?.style.removeProperty("background-image");
  // }, []);

  // useEffect(() => {
  //   if (ref && ref.current) {
  //     const img = ref.current.querySelector("img");
  //     if (!img) return;
  //     if (img.complete) {
  //       handleLoad();
  //     } else {
  //       img.addEventListener("load", handleLoad);
  //     }
  //   }
  // }, [handleLoad]);

  return (
    // Intro is the first section of the page. Right side is the image, left side is the intro text.
    <section
      className="flex flex-col items-center pt-40 justify-center h-screen w-full mx-auto
      md:pt-20 lg:flex-row lg:justify-between lg:pt-0 lg:w-4/5"
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full flex-1
        lg:items-start lg:w-1/3 lg:justify-end lg:pb-60
        2xl:pb-80 2xl:w-2/6"
      >
        <h1 className="text-4xl font-bold text-center lg:text-left 2xl:text-6xl">
          Hi, I&apos;m <span className="text-primary-500">Ryan</span>
        </h1>
        <p
          className="mt-3 text-lg text-center
                lg:text-left lg:text-xl
                2xl:text-2xl"
        >
          I&apos;m a full-stack developer.
        </p>
        <Link href="#contact">
          <button
            type="button"
            className="mt-8 font-semibold rounded-2xl
                        px-8 py-2.5 bg-gray-300 dark:bg-gray-700 dark:text-white
                        hover:bg-black hover:text-white transition duration-200 ease-in-out
                        dark:hover:bg-white dark:hover:text-black
                        2xl:text-lg 2xl:px-8 2xl:py-2"
          >
            Let&#39;s talk
          </button>
        </Link>
      </div>
      <div
        className="flex-1 w-full
        lg:w-2/3 lg:self-end md:w-3/5 2xl:w-4/6 blur-load"
        // style={{
        //   backgroundImage: "url('/intro-small.png')",
        // }}
        // ref={ref}
      >
        <Image
          src="/intro.png"
          alt="bg"
          width={1000}
          height={1000}
          // priority
          className="object-cover dark:filter dark:grayscale"
        />
      </div>
    </section>
  );
}
