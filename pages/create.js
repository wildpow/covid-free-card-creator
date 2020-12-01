/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/layout";
import { useForm } from "../components/formCtx";
import Heading from "../components/heading";
import styles from "../styles/Create.module.css";

export default function CreateCard() {
  const router = useRouter();

  const { state, dispatch } = useForm();

  const toggleBgCheck = (e, changedIndex) => {
    const { checked } = e.target;
    const newBgChecks = state.borderInfo;
    state.borderInfo.map((_, i) => {
      if (i === changedIndex) {
        newBgChecks[i].checked = checked;
      } else {
        newBgChecks[i].checked = false;
      }
      return null;
    });
    dispatch({ type: "borderInfo", payload: [...newBgChecks] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedBorder = state.borderInfo.filter((item) => item.checked);
    const borderSrc = checkedBorder.length === 1 ? checkedBorder[0].src : "";
    // console.log(checkedBorder);
    dispatch({ type: "selectedBorderSrc", payload: borderSrc });
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
          <label htmlFor="to" className="block">
            <span className="text-gray-700">To</span>
            <input
              type="text"
              name="to"
              id="to"
              placeholder="Miss Pacman"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              value={state.to}
              onChange={(e) =>
                dispatch({ type: "to", payload: e.target.value })
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
              placeholder="Mr. Pacman"
              required
              value={state.from}
              onChange={(e) =>
                dispatch({ type: "from", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="date" className="block">
            <span className="text-gray-700">Date</span>
            <input
              type="date"
              name="date"
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
          <label htmlFor="message" className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              placeholder="Even though I have not seen you since February you are in
              my thoughts. I dream of the day we can once again eat fruit and go
              ghost hunting again."
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
          <div className="grid justify-center grid-cols-2 gap-6 justify-items-center">
            <label htmlFor="backgroundColor" className="flex">
              <span className="pr-2 text-gray-700">Bg Color</span>
              <input
                type="color"
                id="backgroundColor"
                name="backgroundColor"
                value={state.bgColor}
                onChange={(e) =>
                  dispatch({ type: "bgColor", payload: e.target.value })
                }
              />
            </label>
            <label htmlFor="textColor" className="flex">
              <span className="pr-2 text-gray-700">Text Color</span>
              <input
                type="color"
                id="textColor"
                name="textColor"
                value={state.textColor}
                onChange={(e) =>
                  dispatch({ type: "textColor", payload: e.target.value })
                }
              />
            </label>
            <div>
              <h3>Border theme</h3>
              <fieldset>
                <ul
                  className={`${styles.borderGrid} grid justify-center gap-6 justify-items-center`}
                >
                  {state.borderInfo.map((item, i) => (
                    <li key={item.src}>
                      <input
                        type="checkbox"
                        name={`border-${i}`}
                        id={`border-${i}`}
                        checked={item.checked}
                        className={`${styles.borderOneInput}`}
                        onChange={(e) => toggleBgCheck(e, i)}
                      />
                      <label
                        htmlFor={`border-${i}`}
                        className={`${styles.borderOneLabel}`}
                      >
                        <Image
                          layout="fixed"
                          width={150}
                          height={150}
                          src={item.src}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>
            </div>
          </div>
          <button className="btn2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
