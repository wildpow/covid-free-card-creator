import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { useForm } from "../components/formCtx";

export default function OutPutCard() {
  const { state } = useForm();
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Output</title>
      </Head>
      <h2>Output of card</h2>
      <div>
        <h3>{`Dear ${state.to},`}</h3>
        <div>{state.date}</div>
        <p>{state.message}</p>
        <span>{`Love, ${state.from}`}</span>
        <Link href="/create">
          <a>Back</a>
        </Link>
      </div>
    </Layout>
  );
}
