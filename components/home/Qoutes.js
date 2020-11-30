import Image from "next/image";
import styles from "./Quotes.module.css";

export default function Quotes() {
  return (
    <article>
      <div className={`${styles.headingWrapper} w-full justify-center flex`}>
        <h2
          className={`${styles.headingLine} mb-10 text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:mb-10 xl:mb-16`}
        >
          What are people saying?
        </h2>
      </div>
      <div className={`${styles.quotesWrapper}`}>
        <div
          className={` ${styles.quoteCard} w-10/12 self-center  xsm:w-12/12  xsm:self-start md:w-full md:self-center md:m-auto`}
        >
          <q>
            I think the next best thing to solving a problem is finding some
            humor in it.
          </q>
          <span className="self-end">- Frank A, Clark</span>
        </div>
        <div
          className={`xl:self-end col-start-2 xl:col-end-2 xl:w-full  ${styles.quoteCard} w-8/12 xsm:w-8/12 self-end phablet:mb-0 xl:w-full`}
        >
          <q>Humor is just another defence against the universe.</q>
          <span className="self-end">- Mel Brooks</span>
        </div>
        <div
          className={`${styles.santaSled}  -mt-10 xsm:-mt-18 mb-6 xsm:mb-8 phablet:mb-0 phablet:-mt-12`}
        >
          <Image
            src="/images/santa-s-sleigh.png"
            alt="Cartoon elf"
            layout="responsive"
            width={750}
            height={450}
          />
        </div>
        <div
          className={`${styles.quoteCard} ${styles.cardConflict} self-start xsm:self-center phablet:self-end xl:w-10/12 phablet:mt-0 lg:row-start-2 lg:row-end-3 lg:w-full phablet:w-6/12 w-8/12`}
        >
          <q>When humor goes, there goes civilization.</q>
          <span className="self-end">- Erma Bombeck</span>
        </div>
        <div
          className={` ${styles.quoteCard} md:w-full md: self-center lg:col-start-1 lg:col-end-3`}
        >
          <q>
            Life does not cease to be funny when people die any more than it
            ceases to be serious when people laugh.
          </q>
          <span className="self-end">- George Bernard Shaw</span>
        </div>
      </div>
    </article>
  );
}
