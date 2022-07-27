/**
 * @generated SignedSource<<59d4410dad102b4d5441826a6ef7cf48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppCompanyQuery$variables = {};
export type AppCompanyQuery$data = {
  readonly company: {
    readonly ceo: string | null;
    readonly employees: number | null;
    readonly founded: number | null;
    readonly founder: string | null;
    readonly launch_sites: number | null;
  } | null;
  readonly roadster: {
    readonly apoapsis_au: number | null;
  } | null;
};
export type AppCompanyQuery = {
  response: AppCompanyQuery$data;
  variables: AppCompanyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Roadster",
    "kind": "LinkedField",
    "name": "roadster",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "apoapsis_au",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Info",
    "kind": "LinkedField",
    "name": "company",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ceo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "employees",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "founded",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "founder",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "launch_sites",
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
    "name": "AppCompanyQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppCompanyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3197f22b65887400186fce03ff0c80ff",
    "id": null,
    "metadata": {},
    "name": "AppCompanyQuery",
    "operationKind": "query",
    "text": "query AppCompanyQuery {\n  roadster {\n    apoapsis_au\n  }\n  company {\n    ceo\n    employees\n    founded\n    founder\n    launch_sites\n  }\n}\n"
  }
};
})();

(node as any).hash = "b66745ceabd758fdab08879221588e2f";

export default node;
