/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">Home</Link>
        <nav>
          <Link href="/create">
            <a>Create</a>
          </Link>
          <Link href="/roadmap">
            <a>Roadmap</a>
          </Link>
          <a href="#">Repo</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Made with Love by Wildpow (FOOTER)</footer>
    </div>
  );
}
