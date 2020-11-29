import { createContext, useContext, useState, useReducer } from "react";

const FormCtx = createContext(null);

export const useForm = () => useContext(FormCtx);

const newDate = new Date();

const initialState = {
  to: "Miss Pacman",
  message:
    "Even though I have not seen you since February you are in my thoughts",
  from: "Mr. Ninja Tiger",
  date: newDate.toISOString().split("T")[0],
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
