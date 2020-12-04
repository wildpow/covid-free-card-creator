import Head from "next/head";
import { Hero, Distanced, HowItWorks, Quotes } from "../components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Creator -- Christmas Editions</title>
      </Head>
      <Hero />
      <Distanced />
      <HowItWorks />
      <Quotes />
    </>
  );
}
