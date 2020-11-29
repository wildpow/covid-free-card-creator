/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
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
              <a
                href="https://github.com/wildpow/covid-free-card-creator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer
        className="relative flex py-10 overflow-hidden"
        style={{ height: "350px" }}
      >
        <p className="self-end flex-1 py-8 text-lg font-bold text-center bg-santa-yellow">
          Made with &nbsp;
          <span role="img" aria-label="heart emoji">
            &#x2764;&#xfe0f;
          </span>
          &nbsp; by &nbsp;
          <a
            className="underline"
            href="https://github.com/wildpow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wildpow
          </a>
        </p>
        <div className="absolute -bottom-3 -right-2" style={{ width: "300px" }}>
          <Image
            src="/images/scared-covid.png"
            alt="Cartoon elf"
            layout="responsive"
            width={450}
            height={350}
          />
        </div>
      </footer>
    </>
  );
}
