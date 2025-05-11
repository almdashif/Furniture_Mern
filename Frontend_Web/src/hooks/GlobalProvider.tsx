import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../Context/context.ts";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
