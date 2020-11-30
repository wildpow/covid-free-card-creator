import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { useForm } from "../components/formCtx";
import Heading from "../components/heading";

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
      <article className="py-12" />
      <Heading text="Create Card" />

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <label htmlFor="date" className="block">
            <span className="text-gray-700">Date</span>
            <input
              type="date"
              name="date"
              className="block w-full mt-1"
              id="date"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={state.date}
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={(e) =>
                dispatch({ type: "date", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="to" className="block">
            <span className="text-gray-700">To</span>
            <input
              type="text"
              name="to"
              id="to"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              value={state.to}
              onChange={(e) =>
                dispatch({ type: "to", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="message" className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              spellCheck
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={state.message}
              onChange={(e) =>
                dispatch({ type: "message", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="from" className="block">
            <span className="text-gray-700">From</span>
            <input
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              name="from"
              id="from"
              required
              value={state.from}
              onChange={(e) =>
                dispatch({ type: "from", payload: e.target.value })
              }
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
