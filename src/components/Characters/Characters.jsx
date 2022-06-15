import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const character = characters.map((character) => {
    return (
      <div key={character.id}>
        <h1>{character.name}</h1>
        <img src={character.image} />
      </div>
    );
  });
  return <div>{character}</div>;
};

export default Characters;
