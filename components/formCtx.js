import { createContext, useContext, useState, useReducer } from "react";

const FormCtx = createContext(null);

export const useForm = () => useContext(FormCtx);

const newDate = new Date();

const initialState = {
  to: "",
  message: "",
  from: "",
  date: newDate.toISOString().split("T")[0],
  bgColor: "#ffffff",
  textColor: "#000000",
  borderInfo: [
    {
      checked: false,
      src: "/images/border.svg",
      alt: "a pen scribble border",
    },
    {
      checked: false,
      src: "/images/christmas1.png",
      alt: "a missle toe background border green and red",
    },
  ],
  selectedBorderSrc: "",
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
