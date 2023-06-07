import Link from "next/link";

export default function Footer() {
  return (
    // footer have contact info(email, github, linkedin, facebook, phone number). They are all links and have icons, all in center and 80% width
    <footer className="flex items-center justify-center w-4/5 mx-auto my-8">
      {/* <h1 className="text-2xl font-bold">Ryan&apos;s Portfolio</h1> */}

      <ul className="flex space-x-4">
        <li>
          {/* mail in .env */}
          <Link href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL || "/"}`}>
            Email
          </Link>
        </li>
        <li>
          <Link href={process.env.NEXT_PUBLIC_MY_GITHUB || "/"} target="blank">
            Github
          </Link>
        </li>
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_MY_LINKEDIN || "/"}
            target="blank"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_MY_FACEBOOK || "/"}
            target="blank"
          >
            Facebook
          </Link>
        </li>
      </ul>
    </footer>
  );
}
