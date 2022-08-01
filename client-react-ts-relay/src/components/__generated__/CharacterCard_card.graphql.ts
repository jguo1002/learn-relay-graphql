/**
 * @generated SignedSource<<b3964c470419603e4532f2a98bd10bdd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterCard_card$data = {
  readonly gender: string | null;
  readonly id: string | null;
  readonly image: string | null;
  readonly name: string | null;
  readonly species: string | null;
  readonly status: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"CharacterHover_hover">;
  readonly " $fragmentType": "CharacterCard_card";
};
export type CharacterCard_card$key = {
  readonly " $data"?: CharacterCard_card$data;
  readonly " $fragmentSpreads": FragmentRefs<"CharacterCard_card">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterCard_card",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "CharacterHover_hover"
    }
  ],
  "type": "Character",
  "abstractKey": null
};

(node as any).hash = "4bd5f33529bc7a551215f9f256c9d66a";

export default node;
