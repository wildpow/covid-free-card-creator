/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/layout";
import { useForm } from "../components/formCtx";
import Heading from "../components/heading";
import styles from "../styles/Create.module.css";
import Input from "../components/input";

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
    const borderSrc =
      checkedBorder.length === 1 ? checkedBorder[0].styles : null;
    dispatch({ type: "selectedBorderStyle", payload: borderSrc });
    router.push("/output");
  };

  return (
    <Layout>
      <Head>
        <title>Card Creator -- Create Card</title>
      </Head>
      <article className="py-12">
        <Heading text="Create Card" />
        <div className="max-w-md px-4 mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <Input
              htmlFor="to"
              label="To"
              value={state.to}
              onChange={dispatch}
              type="text"
              rest={{ placeholder: "Miss Pacman" }}
            />
            <Input
              htmlFor="from"
              label="From"
              value={state.from}
              onChange={dispatch}
              type="text"
              placeholder="Mr. Pacman"
              rest={{ placeholder: "Mr. Pacman" }}
            />
            <Input
              htmlFor="date"
              label="Date"
              value={state.date}
              onChange={dispatch}
              type="date"
              required
              rest={{ pattern: "d{4}-d{2}-d{2}" }}
            />
            <Input
              htmlFor="message"
              label="Message"
              value={state.message}
              onChange={dispatch}
              type="textarea"
              required
              rest={{
                pattern: "d{4}-d{2}-d{2}",
                cols: "30",
                rows: "10",
                spellCheck: true,
                placeholder:
                  "Even though I have not seen you since February you are in my thoughts. I dream of the day we can once again eat fruit and go ghost hunting again.",
              }}
            />
            <div className="grid justify-center grid-cols-2 gap-6 justify-items-center">
              <label htmlFor="bgColor" className="flex">
                <span className="pr-2 text-gray-700">Bg Color</span>
                <input
                  type="color"
                  id="bgColor"
                  name="bgColor"
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
                            alt={item.alt}
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
      </article>
    </Layout>
  );
}
