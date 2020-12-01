import Image from "next/image";
import styles from "../styles/Create.module.css";

export default function Tester({ i, item, toggleBgCheck }) {
  return (
    <div>
      <li key={item.src}>
        {console.log("item.checked", item.checked, "@)(E@EUE@(UEJ")}
        <input
          type="checkbox"
          name={`border-${i}`}
          id={`border-${i}`}
          checked={item.checked}
          className={`${styles.borderOneInput} ${
            item.checked ? styles.checked : ""
          }`}
          onChange={(e) => toggleBgCheck(e, i)}
        />
        <label htmlFor={`border-${i}`} className={`${styles.borderOneLabel}`}>
          <Image layout="fixed" width={150} height={150} src={item.src} />
        </label>
      </li>
    </div>
  );
}
