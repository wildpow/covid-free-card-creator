import Head from "next/head";
import Layout from "../components/layout";
import { Hero, Distanced, HowItWorks, Quotes } from "../components/home";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Christmas Editions</title>
      </Head>
      <Hero />
      <Distanced />
      <HowItWorks />
      <Quotes />
    </Layout>
  );
}
