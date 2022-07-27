/**
 * @generated SignedSource<<d2f5bc0826e47806bbac162d4efcd863>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppCharacterQuery$variables = {
  characterId: string;
};
export type AppCharacterQuery$data = {
  readonly character: {
    readonly created: string | null;
    readonly gender: string | null;
    readonly id: string | null;
    readonly image: string | null;
    readonly name: string | null;
    readonly species: string | null;
    readonly status: string | null;
    readonly type: string | null;
  } | null;
};
export type AppCharacterQuery = {
  response: AppCharacterQuery$data;
  variables: AppCharacterQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "characterId"
  }
],
v1 = [
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
    "name": "AppCharacterQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppCharacterQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42ea6cda8c2c900d2f7e2e734718ac9c",
    "id": null,
    "metadata": {},
    "name": "AppCharacterQuery",
    "operationKind": "query",
    "text": "query AppCharacterQuery(\n  $characterId: ID!\n) {\n  character(id: $characterId) {\n    created\n    id\n    gender\n    image\n    name\n    species\n    status\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "d9ece91b050fb9c24f0532c53f514b8e";

export default node;
