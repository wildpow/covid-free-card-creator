import Link from "next/link";
import Image from "next/image";
import Hand from "../hand";
import {
  heroRoot,
  bgWrapper,
  textWrapper,
  heroWrapper,
} from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={heroRoot}>
      <div className={`${heroWrapper} flex w-full `}>
        <div className={`${bgWrapper}`}>
          <div
            style={{ position: "relative", width: "100%", height: "100%" }}
            className="-ml-5 lg:ml-0 "
          >
            <Image
              layout="fill"
              src="/images/santa.png"
              loading="eager"
              objectFit="fill"
            />
          </div>
        </div>
        <div
          className={`${textWrapper} flex flex-col self-start justify-center w-1/2 h-full pt-1 pr-2 sm:p-4 2xl:p-0`}
        >
          <h1 className="mb-4 text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:mb-10">
            Covid Free Card Creator
          </h1>
          <p className="max-w-2xl mb-6 mr-1 md:text-xl lg:text-3xl lg:leading-10 lg:mb-12 xl:leading-relaxed">
            Create environmentally friendly greeting cards while in quarantine.
            Come on what else are you going to do?
          </p>
          <Link href="/create">
            <a className="btn2" href="/create">
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
