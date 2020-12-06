import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const FormCtx = createContext(null);

export const useForm = () => useContext(FormCtx);

const newDate = new Date();

const initialState = {
  // just for testing
  // to: "Miss Pacman",
  // message:
  //   "Even though I have not seen you since February you are in my thoughts. I dream of the day we can once again eat fruit and go ghost hunting again.",
  // from: "Mr. Ninja Tiger",
  greeting: "",
  message: "",
  signature: "",
  date: newDate.toISOString().split("T")[0],
  bgColor: "#ffffff",
  textColor: "#000000",
  borderInfo: [
    {
      checked: false,
      src: "/images/border.svg",
      alt: "a pen scribble border",
      styles: {
        borderWidth: "50px",
        borderImageSlice: 170,
        borderImageSource: "url(/images/border.svg)",
      },
    },
    {
      checked: false,
      src: "/images/border3.png",
      alt: "a missle toe background border green and red",
      styles: {
        borderStyle: "solid",
        borderImage: "url(/images/border3.png) 1000 900 stretch stretch",
        borderWidth: "50px",
      },
    },
    {
      checked: false,
      src: "/images/heartsBorder.png",
      alt: "pink hearts",
      styles: {
        border: "20px solid pink",
        borderImageSource: "url(/images/heartsBorder.png)",
        borderImageSlice: "20 22",
        borderImageRepeat: "round",
      },
    },
  ],
  selectedBorderStyle: null,
  // selectedBorderSrc: "",
};
const reducer = (state, action) => {
  return { ...state, [action.type]: action.payload };
};
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormCtx.Provider value={{ state, dispatch }}>{children}</FormCtx.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
