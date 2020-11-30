import PropsTypes from "prop-types";
import styles from "../styles/Heading.module.css";

export default function Heading({ text }) {
  return (
    <div className={`${styles.headingWrapper} w-full justify-center flex`}>
      <h2
        className={`${styles.headingLine} mb-10 text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:mb-10 xl:mb-16`}
      >
        {text}
      </h2>
    </div>
  );
}

Heading.propTypes = {
  text: PropsTypes.string,
};

Heading.defaultProps = {
  text: "Default Heading Text",
};
