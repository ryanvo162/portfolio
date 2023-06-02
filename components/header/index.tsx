export default function Header() {
    return (
    //   header in center and 80% width
    <header className="flex items-center justify-between w-4/5 mx-auto my-8">
      <h1 className="text-2xl font-bold">Ryan&apos;s Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
