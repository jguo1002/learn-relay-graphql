/**
 * @generated SignedSource<<ba0bff147c56f7ace639e74fc2897472>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoCard_card$data = {
  readonly id: string;
  readonly image: string;
  readonly likesCount: number;
  readonly meHasLiked: boolean;
  readonly text: string;
  readonly " $fragmentType": "PhotoCard_card";
};
export type PhotoCard_card$key = {
  readonly " $data"?: PhotoCard_card$data;
  readonly " $fragmentSpreads": FragmentRefs<"PhotoCard_card">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PhotoCard_card",
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
  "type": "Photo",
  "abstractKey": null
};

(node as any).hash = "278aef9647ed9895fdcaa8e30152f077";

export default node;
