import Image from "next/image";
import Link from "next/link";

export default function Intro() {
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
        <h1
          className="text-4xl font-bold text-center lg:text-left 2xl:text-6xl"
        >
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
      <Image
        src="/intro.png"
        alt="bg"
        width={1000}
        height={1000}
        className="flex-1 object-cover w-full
        lg:w-2/3 lg:self-end md:w-3/5 dark:filter dark:grayscale
        2xl:w-4/6"
      />
    </section>
  );
}
