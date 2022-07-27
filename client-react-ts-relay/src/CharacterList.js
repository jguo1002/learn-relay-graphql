import React from "react";

function CharacterList() {
  // const {error, data, loading} = useQuery(GET_CHARACTERS);
  const data = {};
  return (
    <div>
      <h1>CharacterList</h1>
      {data.characters.results.map((character) => {
        return (
          <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
