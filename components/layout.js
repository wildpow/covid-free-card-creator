import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>Nav goes here</nav>
      <main>{children}</main>
      <footer>Made with Love by Wildpow (FOOTER)</footer>
    </div>
  );
}
