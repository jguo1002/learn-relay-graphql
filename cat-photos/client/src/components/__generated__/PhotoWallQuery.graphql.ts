/**
 * @generated SignedSource<<901af7b62b665710a524417fbee2d698>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoWallQuery$variables = {};
export type PhotoWallQuery$data = {
  readonly photos: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"PhotoCard_card">;
  }>;
};
export type PhotoWallQuery = {
  response: PhotoWallQuery$data;
  variables: PhotoWallQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PhotoWallQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Photo",
        "kind": "LinkedField",
        "name": "photos",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PhotoCard_card"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PhotoWallQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Photo",
        "kind": "LinkedField",
        "name": "photos",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "meHasLiked",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "likesCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d256bd61ccefb98f7fc1a9599148d47c",
    "id": null,
    "metadata": {},
    "name": "PhotoWallQuery",
    "operationKind": "query",
    "text": "query PhotoWallQuery {\n  photos {\n    id\n    ...PhotoCard_card\n  }\n}\n\nfragment PhotoCard_card on Photo {\n  id\n  text\n  image\n  meHasLiked\n  likesCount\n}\n"
  }
};
})();

(node as any).hash = "38c1a85d2b580e6e80bcbe68fb007b44";

export default node;
