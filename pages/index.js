/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Hand from "../components/hand";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Card Creator -- Christmas Editions</title>
      </Head>
      <article className="relative flex h-full pb-8 -ml-10 overflow-hidden bottom-line">
        <div className="w-1/2 ">
          <Image
            src="/images/santa.png"
            alt="Picture of the author"
            layout="responsive"
            width={750}
            height={900}
          />
        </div>
        <div className="w-1/2 flex flex-col h-full, mb-0 content-center items-center justify-items-center justify-center">
          <div className="flex flex-col max-w-3xl p-10 pt-0">
            <h1 className="mb-12 text-8xl">
              Covid Free
              <br />
              Card Creator
            </h1>
            <p className="text-3xl leading-10 mb-14">
              Create environmentally friendly greeting cards while in
              quarantine. Come on what else are you going to do?
            </p>
            <Link href="/create">
              <a className="flex items-center justify-center max-w-sm px-0 py-2 text-3xl leading-none text-center text-white transition duration-500 ease-in-out transform border-4 border-black rounded-sm shadow-md font-heading bg-santa-red hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                <div className="h14">Try it out</div>
                <div className="w-10 h-12 ml-6 text-white">
                  <Hand />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
      <article
        className="relative grid max-w-5xl grid-cols-4 grid-rows-2 gap-10 py-20 mx-auto my-20"
        style={{ height: "50vh" }}
      >
        <div className="self-center pl-10 justify-self-center">
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
          className="absolute w-full col-span-1 row-span-1 text-6xl leading-snug text-center font-heading"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Even our components are socially distanced!
        </p>
      </article>
      <article
        className="relative flex py-20 my-20 overflow-hidden"
        style={{ height: "60vh" }}
      >
        <div className="relative flex flex-col max-w-5xl mx-auto heading">
          <h2 className="pb-2 mb-12 text-6xl ">How does it work?</h2>
          <p className="max-w-2xl text-3xl leading-10 mb-14">
            Pick background theme and colors. Fill in title, message and date.
            Share, print or save *
            <br />
            <span className="text-lg">* Some features coming soon</span>
          </p>
          <Link href="/create">
            <a className="flex items-center justify-center max-w-sm px-0 py-2 text-3xl leading-none text-center text-white transition duration-500 ease-in-out transform border-4 border-black rounded-sm shadow-md font-heading bg-santa-red hover:shadow-xl hover:-translate-y-1 hover:scale-105">
              <div className="h14">Try it out</div>
              <div className="w-10 h-12 ml-6 text-white">
                <Hand />
              </div>
            </a>
          </Link>
        </div>
        <div
          className="absolute top-0 right-0"
          style={{
            width: "500px",
            height: "500px",
            right: "-164px",
            zIndex: "-1",
          }}
        >
          <Image
            src="/images/elf.jpg"
            alt="Cartoon elf"
            layout="responsive"
            width={750}
            height={900}
          />
        </div>
      </article>
      <article className="relative flex py-20 pb-2 my-20 mb-10 overflow-hidden">
        <div className="relative flex flex-col max-w-5xl mx-auto heading2">
          <h2 className="pb-0 mb-0 text-6xl ">What are people saying?</h2>
        </div>
      </article>
      <article
        className="relative grid grid-cols-2 grid-rows-2 gap-10 py-20 my-20 overflow-hidden"
        style={{ height: "60vh" }}
      >
        <div className="-ml-20" style={{ width: "600px", height: "400px" }}>
          <Image
            src="/images/santa-s-sleigh.jpg"
            alt="Cartoon elf"
            layout="responsive"
            width={650}
            height={400}
          />
        </div>
        <div className="flex flex-col self-start p-10 -ml-24 text-3xl leading-10 border-4 rounded-lg shadow-xl justify-self-start">
          <q className="mb-12">When humor goes, there goes civilization.</q>
          <span className="self-end">- Erma Bombeck</span>
        </div>
        <div className="flex flex-col self-end p-10 ml-20 -mb-10 text-3xl leading-10 border-4 rounded-lg shadow-xl">
          <q className="mb-12">
            I think the next best thing to solving a problem is finding some
            humor in it.
          </q>
          <span className="self-end">- Frank A, Clark</span>
        </div>
        <div className="flex flex-col self-center p-10 mb-20 text-3xl leading-10 border-4 rounded-lg shadow-xl justify-self-center">
          <q className="mb-12">
            Humor is just another defence against the universe.
          </q>
          <span className="self-end">- Mel Brooks</span>
        </div>
      </article>
    </Layout>
  );
}
