/**
 * @generated SignedSource<<61d21902a8e58457ccb53153f5b7403b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PhotoCard_card$data = {
  readonly id: string | null;
  readonly image: string | null;
  readonly text: string | null;
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
    }
  ],
  "type": "Photo",
  "abstractKey": null
};

(node as any).hash = "32ed33b1403ac5ff03c24aa6e17cf68c";

export default node;
