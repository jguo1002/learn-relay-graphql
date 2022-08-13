import React, { Suspense } from "react";
import { graphql } from "babel-plugin-relay/macro";
import {
  useLazyLoadQuery,
  usePreloadedQuery,
  loadQuery,
  PreloadedQuery,
} from "react-relay";
import { Link } from "react-router-dom";
import "./Photo.css";
import RelayEnvironment from "./RelayEnv";
import PhotoCard from "./PhotoCard";
import { PhotoWallQuery as PhotoWallQueryType } from "./__generated__/PhotoWallQuery.graphql";

const PhotoWallQuery = graphql`
  query PhotoWallQuery {
    photos {
      id
      ...PhotoCard_card
    }
  }
`;

const photoWallQuery = loadQuery(RelayEnvironment, PhotoWallQuery, {
  /* query variables */
});

type Props = {
  photoWallQuery: PreloadedQuery<PhotoWallQueryType>;
};

function PhotoWall({ photoWallQuery }: { photoWallQuery: any }) {
  const data: any = usePreloadedQuery(PhotoWallQuery, photoWallQuery);
  console.log("data: ", data);

  // const data: any = useLazyLoadQuery<PhotoWallQueryType>(
  //   PhotoWallQuery,
  //   {}
  // );

  return (
    <div className="">
      <h1>Cahir Photos</h1>
      <div className="photo-wall">
        {data.photos.map((photo: any, index: any) => {
          return (
            // <Link to={`${photo.id}`} key={index}>
            <div key={index}>
              {photo !== null && <PhotoCard photo={photo} />}
            </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
}

const PhotoWallRoot = () => {
  return <PhotoWall photoWallQuery={photoWallQuery} />;
};

export default PhotoWallRoot;
