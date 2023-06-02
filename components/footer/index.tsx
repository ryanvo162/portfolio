export default function Footer() {
  return (
    // footer have contact info(email, github, linkedin, facebook, phone number). They are all links and have icons, all in center and 80% width
    <footer className="flex items-center justify-center w-4/5 mx-auto my-8">
      {/* <h1 className="text-2xl font-bold">Ryan&apos;s Portfolio</h1> */}

      <ul className="flex space-x-4">
        <li>
          <a href="mailto:ryanvo.0162@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/ryanvo162">Github</a>
        </li>
      </ul>
    </footer>
  );
}
