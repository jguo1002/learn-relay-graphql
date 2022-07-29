import React, { Suspense } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useQueryLoader } from "react-relay";
import "./Character.css";
import { CharacterQuery as CharacterQueryType } from "./__generated__/CharacterQuery.graphql";
import { useParams } from "react-router";

const CharacterQuery = graphql`
  query CharacterQuery($characterId: ID!) {
    character(id: $characterId) {
      created
      id
      gender
      image
      name
      species
      status
      type
      episode {
        id
        episode
        name
      }
    }
  }
`;

function Character() {
  let { id } = useParams<{ id?: string }>();

  const data: any = useLazyLoadQuery<CharacterQueryType>(CharacterQuery, {
    characterId: id ? id : "4",
  });

  // const [queryRef, loadQuery] = useQueryLoader(CharacterQueryType);

  const character = data.character;
  console.log(character);

  return (
    <Suspense fallback={"Loading..."}>
      <div className="character">
        <img
          src={character.image}
          alt={character.name}
          width={750}
          height={750}
        />
        <div className="character-content">
          <h1>{character.name}</h1>
          <p>{character.gender}</p>
          <div className="character-episode">
            {character.episode.map((e: any, index: any) => {
              return (
                <div key={index}>
                  {e.name} - {e.episode}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Character;
