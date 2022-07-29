/**
 * @generated SignedSource<<2b583c2f0cdbc732a0ac9c4630006c59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CharacterQuery$variables = {
  characterId: string;
};
export type CharacterQuery$data = {
  readonly character: {
    readonly created: string | null;
    readonly episode: ReadonlyArray<{
      readonly episode: string | null;
      readonly id: string | null;
      readonly name: string | null;
    } | null>;
    readonly gender: string | null;
    readonly id: string | null;
    readonly image: string | null;
    readonly name: string | null;
    readonly species: string | null;
    readonly status: string | null;
    readonly type: string | null;
  } | null;
};
export type CharacterQuery = {
  response: CharacterQuery$data;
  variables: CharacterQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "characterId"
  }
],
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
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "characterId"
      }
    ],
    "concreteType": "Character",
    "kind": "LinkedField",
    "name": "character",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created",
        "storageKey": null
      },
      (v1/*: any*/),
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
        "name": "image",
        "storageKey": null
      },
      (v2/*: any*/),
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
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
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
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "episode",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "episode",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
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
    "name": "CharacterQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CharacterQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8db3b254210dd401880ffe597536cc99",
    "id": null,
    "metadata": {},
    "name": "CharacterQuery",
    "operationKind": "query",
    "text": "query CharacterQuery(\n  $characterId: ID!\n) {\n  character(id: $characterId) {\n    created\n    id\n    gender\n    image\n    name\n    species\n    status\n    type\n    episode {\n      id\n      episode\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2b89fdb6f8ae193ed9f926c100f3674e";

export default node;
