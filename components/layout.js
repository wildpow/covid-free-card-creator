import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="global-container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <header className="py-6 bg-santa-red md:flex md:justify-end">
          <nav className="flex items-center mx-auto text-white max-w-screen-2xl font-heading justify-evenly md:w-1/2 md:mx-0 md:mr-0 md:text-xl">
            <Link href="/">
              <a className="nav__Link">Home</a>
            </Link>
            <Link href="/create">
              <a className="nav__Link">Create</a>
            </Link>

            <Link href="/roadmap">
              <a className="nav__Link">Roadmap</a>
            </Link>
            <a
              className="nav__Link"
              href="https://github.com/wildpow/covid-free-card-creator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </nav>
        </header>
        <main>{children}</main>
      </div>
      <footer className="flex items-center justify-between overflow-hidden footer__text md:justify-center">
        <p className="pl-10 mt-4 font-bold md:text-2xl md:pl-0 md:mt-10">
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
        <div className="covidGuy md:absolute">
          <Image
            src="/images/scared-covid.png"
            alt="Cartoon elf"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
      </footer>
    </div>
  );
}
