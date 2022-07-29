/**
 * @generated SignedSource<<dd6210e57a667052f961311733a74ea5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CharacterListQuery$variables = {};
export type CharacterListQuery$data = {
  readonly characters: {
    readonly results: ReadonlyArray<{
      readonly id: string | null;
      readonly image: string | null;
      readonly name: string | null;
    } | null> | null;
  } | null;
};
export type CharacterListQuery = {
  response: CharacterListQuery$data;
  variables: CharacterListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Characters",
    "kind": "LinkedField",
    "name": "characters",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Character",
        "kind": "LinkedField",
        "name": "results",
        "plural": true,
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
            "name": "name",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CharacterListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CharacterListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a1dd365433cdc2d84261f1952d0b8cff",
    "id": null,
    "metadata": {},
    "name": "CharacterListQuery",
    "operationKind": "query",
    "text": "query CharacterListQuery {\n  characters {\n    results {\n      id\n      name\n      image\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ed8f8960c271896e21f8ed4fd88c5f1f";

export default node;
