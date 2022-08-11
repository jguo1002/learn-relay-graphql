/**
 * @generated SignedSource<<1b0ce81240677089d58eabd3d855624c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PhotoQuery$variables = {
  photoId: string;
};
export type PhotoQuery$data = {
  readonly photo: {
    readonly id: string;
    readonly image: string;
    readonly text: string;
  };
};
export type PhotoQuery = {
  response: PhotoQuery$data;
  variables: PhotoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "photoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "photoId"
      }
    ],
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "photo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PhotoQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PhotoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e81d3a8fb41ef1a6a9a1d36e94018c11",
    "id": null,
    "metadata": {},
    "name": "PhotoQuery",
    "operationKind": "query",
    "text": "query PhotoQuery(\n  $photoId: ID!\n) {\n  photo(id: $photoId) {\n    id\n    text\n    image\n  }\n}\n"
  }
};
})();

(node as any).hash = "824d5b25bf7fec4f181768746c985917";

export default node;
