import Link from "next/link";
import styles from "./HowItWorks.module.css";
import Hand from "../hand";

export default function HowItWorks() {
  return (
    <article className={`${styles.howItWorksRoot}`}>
      <div
        className={`${styles.howItWorksWrapper} flex flex-col max-w-5xl h-full self-start justify-center`}
      >
        <div>
          <h2
            className={`${styles.headingLine} mb-4 text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:mb-10`}
          >
            How does it work?
          </h2>
          <p className="max-w-2xl mb-6 mr-1 md:text-xl lg:text-3xl lg:leading-10 lg:mb-12 xl:leading-relaxed sm:max-w-sm lg:max-w-2xl">
            Pick background theme and colors. Fill in title, message and date.
            Share, print or save.
            <br />
            <span className="font-bold md:text-lg">
              *Some features coming soon
            </span>
          </p>
          <Link href="/create">
            <a className="w-3/4 btn2 xl:max-w-md ">
              <div className="">Try it out</div>
              <div className="w-5 ml-4 text-white md:w-8 md:mb-1 ">
                <Hand />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}
