import React, { Suspense } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useQueryLoader } from "react-relay";
import "./Photo.css";
import { useParams } from "react-router";

const PhotoQuery = graphql`
  query PhotoQuery($photoId: ID!) {
    photo(id: $photoId) {
      id
      text
      image
    }
  }
`;

function Photo() {
  let { id } = useParams<{ id?: string }>();

  const data: any = useLazyLoadQuery(PhotoQuery, {
    photoId: id ? id : "4",
  });

  const photo = data.photo;
  console.log(photo);

  return (
    <Suspense fallback={"Loading..."}>
      <div className="photo">
        <img src={photo.image} alt={photo.name} width={750} height={750} />
        <div className="photo-content">
          <h1>{photo.name}</h1>
          <p>{photo.text}</p>
        </div>
      </div>
    </Suspense>
  );
}

export default Photo;
