import Link from "next/link";
import Hand from "../hand";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={`${styles.heroRoot}`}>
      <div className={`${styles.hero} flex justify-end self-end`}>
        <div className="flex flex-col self-start justify-center w-1/2 h-full p-2 mb-10 sm:p-4 2xl:p-0">
          <h1 className="mb-4 text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:mb-10">
            Covid Free Card Creator
          </h1>
          <p className="max-w-2xl mb-6 mr-1 md:text-xl lg:text-3xl lg:leading-10 lg:mb-12 xl:leading-relaxed">
            Create environmentally friendly greeting cards while in quarantine.
            Come on what else are you going to do?
          </p>
          <Link href="/create">
            <a className="btn2">
              <div className="">Try it out</div>
              <div className="w-5 ml-4 text-white md:w-8 md:mb-1 ">
                <Hand />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
