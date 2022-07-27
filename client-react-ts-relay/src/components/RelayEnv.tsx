// https://www.telerik.com/blogs/graphql-relay-front-end

import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from "relay-runtime";

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  return fetch("https://rickandmortyapi.com/graphql/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response: any) => {
    return response.json();
  });
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10,
  }),
});
