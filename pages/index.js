/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Hand from "../components/hand";
import styles from "../styles/Home.module.css";
import Hero from "../components/home/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Christmas Editions</title>
      </Head>
      <Hero />
      {/* <article
        className="relative grid max-w-5xl grid-cols-4 grid-rows-2 py-20 mx-auto my-20 md:gap-10"
        style={{ height: "80vh" }}
      >
        <div className="self-center md:pl-10 justify-self-center">
          <Image
            src="/images/arrowupbrown.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-end pb-3 justify-self-center">
          <Image
            src="/images/arrowupyellow.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-start pt-4 justify-self-center">
          <Image
            src="/images/arrowupred.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-center pt-20 justify-self-center">
          <Image
            src="/images/arrowupyellow.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-start pr-10 justify-self-center">
          <Image
            src="/images/arrowdowngold.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-center justify-self-start">
          <Image
            src="/images/arrowdownred.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-start pt-2 justify-self-start">
          <Image
            src="/images/arrowdowngold.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <div className="self-end pb-8 justify-self-start">
          <Image
            src="/images/arrowdownbrown.png"
            alt=""
            width="80"
            height="102"
            layout="fixed"
          />
        </div>
        <p
          className="absolute w-full col-span-1 row-span-1 leading-snug text-center md:text-6xl font-heading"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Even our components are socially distanced!
        </p>
      </article> */}
      {/* <article
        className="relative flex py-20 my-20 overflow-hidden"
        style={{ height: "60vh" }}
      >
        <div className="relative flex flex-col max-w-5xl mx-auto heading">
          <h2 className="pb-2 mb-12 md:text-6xl ">How does it work?</h2>
          <p className="max-w-2xl md:leading-10 md:text-3xl mb-14">
            Pick background theme and colors. Fill in title, message and date.
            Share, print or save *
            <br />
            <span className="font-bold md:text-lg">
              * Some features coming soon
            </span>
          </p>
          <Link href="/create">
            <a className="btn">
              <div className="h14">Try it out</div>
              <div className="w-10 h-12 ml-6 text-white">
                <Hand />
              </div>
            </a>
          </Link>
        </div>
        <div className={`${styles.elfImage} absolute right-0 top-12`}>
          <Image
            src="/images/elf.jpg"
            alt="Cartoon elf"
            layout="responsive"
            width={750}
            height={900}
          />
        </div>
      </article> */}
      {/* <article className="relative flex py-20 pb-2 my-20 mb-10 overflow-hidden">
        <div className="relative flex flex-col max-w-5xl mx-auto heading2">
          <h2 className="pb-0 mb-0 md:text-6xl ">What are people saying?</h2>
        </div>
      </article>
      <article
        className="relative grid grid-cols-4 grid-rows-4 gap-10 py-20 my-20 overflow-hidden"
        style={{ height: "80vh" }}
      >
        <div className={`${styles.santaSled} -ml-20`}>
          <Image
            src="/images/santa-s-sleigh.jpg"
            alt="Cartoon elf"
            layout="responsive"
            width={750}
            height={450}
          />
        </div>
        <div
          className={` ${styles.quoteCard}  row-start-1 row-end-2 col-start-2 col-span-3 md:mt-24 self-start justify-self-center mr-44 `}
        >
          <q className="mb-12">When humor goes, there goes civilization.</q>
          <span className="self-end">- Erma Bombeck</span>
        </div>
        <div
          className={` ${styles.quoteCard} row-start-3 row-end-4 col-start-3 col-span-3 md:mr-20 self-start`}
          style={{ maxWidth: "fit-content" }}
        >
          <q className="mb-12">
            I think the next best thing to solving a problem is finding some
            humor in it.
          </q>
          <span className="self-end">- Frank A, Clark</span>
        </div>
        <div
          className={` ${styles.quoteCard} self-start col-start-4 row-start-1 row-span-2`}
        >
          <q className="mb-12">
            Humor is just another defence against the universe.
          </q>
          <span className="self-end">- Mel Brooks</span>
        </div>
        <div
          className={` ${styles.quoteCard} row-start-3 row-end-4 col-start-1 col-span-2 mt-20 md:ml-12 self-start`}
          style={{ maxWidth: "fit-content" }}
        >
          <q className="mb-12">
            Life does not cease to be funny when people die any more than it
            ceases to be serious when people laugh.
          </q>
          <span className="self-end">- George Bernard Shaw</span>
        </div>
      </article> */}
    </Layout>
  );
}
