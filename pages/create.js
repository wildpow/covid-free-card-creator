import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { useForm } from "../components/formCtx";

export default function CreateCard() {
  const router = useRouter();
  const { state, dispatch } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/output");
  };
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Create Card</title>
      </Head>
      <h2>Create Card</h2>
      {console.log()}
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          id="date"
          required
          value={state.date}
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={(e) => dispatch({ type: "date", payload: e.target.value })}
        />
        <input
          type="text"
          name="to"
          id="to"
          required
          value={state.to}
          onChange={(e) => dispatch({ type: "to", payload: e.target.value })}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          spellCheck
          required
          value={state.message}
          onChange={(e) =>
            dispatch({ type: "message", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="from"
          id="from"
          required
          value={state.from}
          onChange={(e) => dispatch({ type: "from", payload: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
