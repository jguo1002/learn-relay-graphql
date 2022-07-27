import React, { Suspense } from "react";
// import { useLazyLoadQuery } from "react-relay";
import {graphql} from "babel-plugin-relay/macro";
import { RelayEnvironmentProvider, usePreloadedQuery, loadQuery } from "react-relay";
import RelayEnvironment from "./components/RelayEnv";
import "./App.css";

const CharacterQuery = graphql`
  query AppCharacterQuery($characterId: ID!) {
    character(id: $characterId) {
      created
      id
      gender
      image
      name
      species
      status
      type
    }
  }
`

const preloadedQuery = loadQuery(RelayEnvironment, CharacterQuery, {
  /* query variables */
  "characterId": 1
});


function App(props: any) {
  const data: any = usePreloadedQuery(CharacterQuery, props.preloadedQuery);
  console.log(data);

  return <div className="App">
    <header className="App-header">
        <p>Name: {data.character.name}</p>
        <p>Species: {data.character.species}</p>
        <p>Status: {data.character.status}</p>
        <img src={data.character.image} alt={data.character.name} />
      </header>
    <div></div>
  </div>;
};

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;