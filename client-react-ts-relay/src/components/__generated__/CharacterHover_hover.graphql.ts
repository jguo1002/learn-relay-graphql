/**
 * @generated SignedSource<<a830ffd365da63035b7314c1ffcaec60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterHover_hover$data = {
  readonly location: {
    readonly created: string | null;
    readonly dimension: string | null;
    readonly name: string | null;
    readonly type: string | null;
  } | null;
  readonly " $fragmentType": "CharacterHover_hover";
};
export type CharacterHover_hover$key = {
  readonly " $data"?: CharacterHover_hover$data;
  readonly " $fragmentSpreads": FragmentRefs<"CharacterHover_hover">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterHover_hover",
  "selections": [
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
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "created",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Character",
  "abstractKey": null
};

(node as any).hash = "7cf5803d9e050c15dc95bb7e0c3e3630";

export default node;
