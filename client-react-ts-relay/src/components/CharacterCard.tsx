import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
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
  const character = useFragment(
    graphql`
      fragment CharacterCard_card on Character {
        id
        name
        image
        gender
        status
        species
      }
    `,
    props.character
  );
  console.log();
  return (
    <div>
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
          <Typography variant="body2" color="text.secondary">
            {character.species}
            {bull}
            {character.gender}
            {bull}
            {character.status}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CharacterCard;
