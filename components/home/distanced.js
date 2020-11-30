import Image from "next/image";
import styles from "./Distance.module.css";

export default function Distanced() {
  return (
    <article
      className={`relative grid max-w-5xl grid-cols-4 grid-rows-2  mx-auto ${styles.distanceRoot}`}
    >
      <div
        className={`${styles.arrowWrapper} justify-self-center self-center ml-12`}
      >
        <Image
          src="/images/arrowupbrown.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div
        className={`${styles.arrowWrapper} justify-self-center self-end mb-2`}
      >
        <Image
          src="/images/arrowupyellow.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div className={`${styles.arrowWrapper} justify-self-center mr-16`}>
        <Image
          src="/images/arrowupred.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div
        className={`${styles.arrowWrapper} justify-self-center self-center mr-20`}
      >
        <Image
          src="/images/arrowupyellow.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div className={`${styles.arrowWrapper} justify-self-center mt-5`}>
        <Image
          src="/images/arrowdowngold.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div
        className={`${styles.arrowWrapper} justify-self-center self-center mr-10 mt-10`}
      >
        <Image
          src="/images/arrowdownred.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div className={`${styles.arrowWrapper} justify-self-center`}>
        <Image
          src="/images/arrowdowngold.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <div
        className={`${styles.arrowWrapper} justify-self-center mr-12 self-center mb-8 ml-5`}
      >
        <Image
          src="/images/arrowdownbrown.png"
          alt=""
          width="160"
          height="204"
          layout="responsive"
        />
      </div>
      <p
        className="absolute w-full text-xl leading-snug text-center md:text-4xl lg:text-6xl font-heading px-7"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Even our components are socially distanced!
      </p>
    </article>
  );
}
