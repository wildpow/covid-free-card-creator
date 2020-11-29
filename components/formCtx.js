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
  // switch (action.type) {
  //   case "to":
  //     return {...state, to: action.payload}
  //   case 'date':
  //     return {...state, [action.type]: action.payload}
  //   case: "message":
  // }
};
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [to, setTo] = useState("Miss Pacman");
  // const [message, setMessage] = useState(
  //   "Even though I have not seen you since February you are in my thoughts"
  // );
  // const [from, setFrom] = useState("Mr. Ninja Tiger");
  // const newDate = new Date();
  // const [date, setDate] = useState(newDate.toISOString().split("T")[0]);

  return (
    <FormCtx.Provider value={{ state, dispatch }}>{children}</FormCtx.Provider>
  );
};
