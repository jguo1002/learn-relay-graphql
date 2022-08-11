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
  const response = await fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  const data = await response.json();
  return data;
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10,
  }),
});
