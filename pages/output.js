import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { useForm } from "../components/formCtx";
import Heading from "../components/heading";
import Hand from "../components/hand";

// keep for tests of more borders!!
import styles from "../styles/Output.module.css";

export default function OutPutCard() {
  const { state } = useForm();
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Output</title>
      </Head>
      <article className="py-24 ">
        <Heading text={state.to.length === 0 ? "Weird..." : "Card Output"} />
        {state.to.length === 0 ? (
          <div className="max-w-2xl mx-auto mb-24">
            <p className="max-w-2xl mb-6 mr-1 md:text-xl lg:text-3xl lg:leading-10 lg:mb-12 xl:leading-relaxed">
              Our bad! It&apos;s a chicken and the egg kind of thing. Your card
              doesn&apos;t exist because you haven&apos;t created it yet. On
              second thought it&apos;s nothing like the chicken and the egg
              because creating a card definitely comes first. Anyways, U.S
              Elections... right... that happened...
            </p>
            <p className="max-w-2xl mb-6 mr-1 md:text-xl lg:text-3xl lg:leading-10 lg:mb-12 xl:leading-relaxed">
              {" "}
              Anywas, U.S Elections... right... that happened...
            </p>
          </div>
        ) : (
          <div
            style={{
              ...state.selectedBorderStyle,

              backgroundColor: state.bgColor,
              color: state.textColor,
            }}
            className={`${styles.outputRoot} max-w-md mx-auto mb-24`}
          >
            <div
              className={`${""} grid grid-cols-1 gap-10 p-6 relative h-full`}
            >
              <div className="flex justify-between">
                <h3>{`Dear ${state.to},`}</h3>
                <div className="text-sm">
                  {new Date(state.date).toDateString()}
                </div>
              </div>
              <p className="max-w-2xl mb-6 mr-1 md:text-xl lg:text-3xl lg:leading-10 lg:mb-12 xl:leading-relaxed sm:max-w-sm lg:max-w-2xl">
                {state.message}
              </p>
              <span className="self-center font-bold">{`Love, ${state.from}`}</span>
            </div>
          </div>
        )}
        <Link href="/create">
          <a className="max-w-md mx-auto btn2">
            <div className="">Edit</div>
            {/* <div className="w-5 ml-4 text-white md:w-8 md:mb-1 ">
              <Hand />
            </div> */}
          </a>
        </Link>
      </article>
    </Layout>
  );
}
