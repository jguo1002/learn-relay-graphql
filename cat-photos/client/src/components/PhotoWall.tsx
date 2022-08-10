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

const PhotoWallQuery = graphql`
  query PhotoWallQuery {
    photos {
      results {
        id
        ...Photo_card
      }
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

  // const data: any = useLazyLoadQuery<PhotoWallQueryType>(
  //   PhotoWallQuery,
  //   {}
  // );

  return (
    <div className="">
      <h1>Cahir Photos</h1>
      <div className="photo-list">
        {data.photos.results.map((photo: any, index: any) => {
          return (
            <Link to={`${photo.id}`} key={index}>
              {photo !== null && <PhotoCard photo={photo} />}
            </Link>
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
