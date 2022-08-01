import React, { Suspense } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import "./Character.css";
import { CharacterHover_hover$key } from "./__generated__/CharacterHover_hover.graphql";

const CharacterHover = (props: any) => {
  const character = useFragment<CharacterHover_hover$key>(
    graphql`
      fragment CharacterHover_hover on Character {
        location {
          dimension
          name
          type
          created
        }
      }
    `,
    props.character
  );

  return (
    <Suspense fallback="Loading...">
      {character.location !== null &&
        typeof character.location.name === "string" && (
          <div
            className="character-hover"
            style={{ top: props.pageY, left: props.pageX }}
          >
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Location
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Name: {character.location.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dimension:{character.location.dimension}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type:{character.location.type}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
    </Suspense>
  );
};

export default React.memo(CharacterHover);
