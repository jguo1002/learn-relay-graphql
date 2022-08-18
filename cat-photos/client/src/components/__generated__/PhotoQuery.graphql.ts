/**
 * @generated SignedSource<<15810aeb329b0de44f07b0f0cfa71a17>>
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
    "cacheID": "932b78b6a6c9ee3ed3337145594f9b9b",
    "id": null,
    "metadata": {},
    "name": "PhotoQuery",
    "operationKind": "query",
    "text": "query PhotoQuery(\n  $photoId: String!\n) {\n  photo(id: $photoId) {\n    id\n    text\n    image\n  }\n}\n"
  }
};
})();

(node as any).hash = "714cea14e55860de66b186a4bc45c477";

export default node;
