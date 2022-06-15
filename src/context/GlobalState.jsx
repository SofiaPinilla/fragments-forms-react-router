import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"

const initialState = {
  characters: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");

    dispatch({
      type: "GET_CHARACTERS",
      payload: res.data.results, //res.data.results = array de personajes
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        characters: state.characters,
        getCharacters,
      }}
    >
      {children} {/* children son mis componentes hijos */}
    </GlobalContext.Provider>
  );
};
