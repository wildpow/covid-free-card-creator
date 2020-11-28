/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-6 bg-santa-red">
        <nav className="flex justify-between mx-auto text-2xl text-white max-w-screen-2xl font-heading ">
          <Link href="/">
            <a className="transition duration-500 ease-in-out hover:text-black">
              Home
            </a>
          </Link>
          <ul className="flex">
            <li className="px-5 transition duration-500 ease-in-out hover:text-black">
              <Link href="/create">
                <a>Create</a>
              </Link>
            </li>
            <li className="px-5 transition duration-500 ease-in-out hover:text-black">
              <Link href="/roadmap">
                <a>Roadmap</a>
              </Link>
            </li>
            <li className="px-5 pr-0 transition duration-500 ease-in-out hover:text-black">
              <a href="#">Repo</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Made with Love by Wildpow (FOOTER)</footer>
    </div>
  );
}
