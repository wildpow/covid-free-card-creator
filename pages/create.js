import Head from "next/head";
import Layout from "../components/layout";

export default function CreateCard() {
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Create Card</title>
      </Head>
      <h2>Create Card</h2>
      <form action="">
        <input type="date" name="" id="" />
        <textarea name="" id="" cols="30" rows="10" />
      </form>
    </Layout>
  );
}
