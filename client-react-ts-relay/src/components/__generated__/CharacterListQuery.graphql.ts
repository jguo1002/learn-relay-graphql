/**
 * @generated SignedSource<<a8d73ee301f6251ef45fa14f6ecc9259>>
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
              (v2/*: any*/),
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "dimension",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "created",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
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
    "cacheID": "e9516331bd8e7398b378dc0b03463ada",
    "id": null,
    "metadata": {},
    "name": "CharacterListQuery",
    "operationKind": "query",
    "text": "query CharacterListQuery {\n  characters {\n    info {\n      count\n    }\n    results {\n      id\n      ...CharacterCard_card\n    }\n  }\n}\n\nfragment CharacterCard_card on Character {\n  id\n  name\n  image\n  gender\n  status\n  species\n  ...CharacterHover_hover\n}\n\nfragment CharacterHover_hover on Character {\n  location {\n    dimension\n    name\n    type\n    created\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "319ef64c6c6466569de0690b25850efb";

export default node;
