/**
 * @generated SignedSource<<16ccfe36c59c60b755cee9d3ecc3fb35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterListQuery$variables = {};
export type CharacterListQuery$data = {
  readonly characters: {
    readonly info: {
      readonly count: number | null;
    } | null;
    readonly results: ReadonlyArray<{
      readonly id: string | null;
      readonly " $fragmentSpreads": FragmentRefs<"CharacterCard_card">;
    } | null> | null;
  } | null;
};
export type CharacterListQuery = {
  response: CharacterListQuery$data;
  variables: CharacterListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "Info",
  "kind": "LinkedField",
  "name": "info",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = {
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
    "name": "CharacterListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Characters",
        "kind": "LinkedField",
        "name": "characters",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Character",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CharacterCard_card"
              }
            ],
            "storageKey": null
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
    "name": "CharacterListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Characters",
        "kind": "LinkedField",
        "name": "characters",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Character",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
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
                "name": "gender",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "species",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0df20e314ff2979ac7507a05a8365c78",
    "id": null,
    "metadata": {},
    "name": "CharacterListQuery",
    "operationKind": "query",
    "text": "query CharacterListQuery {\n  characters {\n    info {\n      count\n    }\n    results {\n      id\n      ...CharacterCard_card\n    }\n  }\n}\n\nfragment CharacterCard_card on Character {\n  id\n  name\n  image\n  gender\n  status\n  species\n}\n"
  }
};
})();

(node as any).hash = "319ef64c6c6466569de0690b25850efb";

export default node;
