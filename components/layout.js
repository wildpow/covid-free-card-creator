import Head from "next/head";
import Image from "next/image";
import PropTypes from "prop-types";
import LinkElement from "./Link";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/create",
    name: "Create",
  },
  { href: "/roadmap", name: "Roadmap" },
];

export default function Layout({ children }) {
  return (
    <div className="global-container">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#A30202" />
      </Head>
      <div className="content">
        <header className="py-6 bg-santa-red md:flex md:justify-end">
          <nav className="flex items-center mx-auto text-white max-w-screen-2xl font-heading justify-evenly md:w-1/2 md:mx-0 md:mr-0 md:text-xl">
            {links.map((link) => (
              <LinkElement
                href={link.href}
                activeClassName="activeNavLink"
                key={link.href}
              >
                <a className="nav__Link">{link.name}</a>
              </LinkElement>
            ))}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
