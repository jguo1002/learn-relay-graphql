import React, { useState, Suspense } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import CharacterHover from "./CharacterHover";
import { CharacterCard_card$key } from "./__generated__/CharacterCard_card.graphql";

export const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CharacterCard(props: any) {
  const [hover, setHover] = useState<Boolean>(false);
  const [pageX, setPageX] = useState<Number>(0);
  const [pageY, setPageY] = useState<Number>(0);

  const character = useFragment(
    graphql`
      fragment CharacterCard_card on Character {
        id
        name
        image
        gender
        status
        species
        ...CharacterHover_hover
      }
    `,
    props.character
  );

  const showHover = (e: any) => {
    // console.log("show: ", hover);
    setHover(true);
  };
  const hideHover = (e: any) => {
    // console.log("hide: ", hover);
    setHover(false);
  };
  const setMousePosition = (e: any) => {
    // console.log(e.pageX);
    setPageX(e.pageX + 10);
    setPageY(e.pageY + 10);
  };

  return (
    <Suspense fallback="Loading...">
      {character !== null && typeof character.image === "string" && (
        <Card sx={{ minWidth: 200 }}>
          <div
            onMouseEnter={(e: any) => showHover(e)}
            onMouseOut={(e: any) => hideHover(e)}
            onMouseMove={(e: any) => setMousePosition(e)}
          >
            <CardMedia
              component="img"
              height="200"
              image={character.image}
              alt={character.name}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.species}
              {bull}
              {character.gender}
              {bull}
              {character.status}
            </Typography>
          </CardContent>
        </Card>
      )}
      {hover && (
        <CharacterHover character={character} pageX={pageX} pageY={pageY} />
      )}
    </Suspense>
  );
}

export default React.memo(CharacterCard);
