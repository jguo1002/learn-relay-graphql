import React, { useState, useCallback, Suspense } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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

  const Icon = photo.meHasLiked ? FavoriteIcon : FavoriteBorderIcon;

  const handleLike = useCallback(() => {
    console.log("clicked!");
  }, [photo]);

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
        <CardActions>
          <IconButton onClick={handleLike}>
            <Icon
            // style={{ color: theme.relayDark }}
            />
          </IconButton>
          {photo.likesCount > 0 ? (
            <Typography>{photo.likesCount}</Typography>
          ) : null}
        </CardActions>
      </Card>
    </Suspense>
  );
}

export default React.memo(PhotoCard);
