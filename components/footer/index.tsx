import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-4/5 mx-auto my-8">
      <ul className="flex space-x-4">
        <li>
          <Link href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL || "/"}`}>
            Email
          </Link>
        </li>
        <li>
          <Link href={process.env.NEXT_PUBLIC_MY_GITHUB || "/"} target="_blank">
            Github
          </Link>
        </li>
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_MY_LINKEDIN || "/"}
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href={process.env.NEXT_PUBLIC_MY_FACEBOOK || "/"}
            target="_blank"
          >
            Facebook
          </Link>
        </li>
      </ul>
    </footer>
  );
}
