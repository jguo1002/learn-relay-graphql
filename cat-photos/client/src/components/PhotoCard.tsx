import React, { useState, Suspense } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

export const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function PhotoCard(props: any) {
  const photo = useFragment(
    graphql`
      fragment PhotoCard_card on Photo {
        id
        text
        image
      }
    `,
    props.photo
  );

  return (
    <Suspense fallback="Loading...">
      {/* {photo !== null && typeof photo.image === "string" && ( */}
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={photo?.image}
          alt={photo?.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {photo?.text}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {photo?.species}
            {photo?.gender}
            {photo?.status}
          </Typography> */}
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default React.memo(PhotoCard);
