import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import {
  useLazyLoadQuery,
  usePreloadedQuery,
  loadQuery,
  PreloadedQuery,
} from "react-relay";
import type { CharacterListQuery as CharacterListQueryType } from "./__generated__/CharacterListQuery.graphql";
import { Link } from "react-router-dom";
import "./CharacterList.css";
import RelayEnvironment from "../components/RelayEnv";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const CharacterListQuery = graphql`
  query CharacterListQuery {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const characterListQuery = loadQuery(RelayEnvironment, CharacterListQuery, {
  /* query variables */
});

type Props = {
  characterListQuery: PreloadedQuery<CharacterListQueryType>;
};

function CharacterList({ characterListQuery }: { characterListQuery: any }) {
  const data: any = usePreloadedQuery(CharacterListQuery, characterListQuery);

  // const data: any = useLazyLoadQuery<CharacterListQueryType>(
  //   CharacterListQuery,
  //   {}
  // );

  return (
    <div className="">
      <h1>Rick and Morty Character List</h1>
      <div className="character-list">
        {data.characters.results.map((character: any, index: any) => {
          return (
            <Link to={`${character.id}`} key={index}>
              <Card sx={{ minWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {character.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const CharacterListRoot = () => {
  return <CharacterList characterListQuery={characterListQuery} />;
};

export default CharacterListRoot;
