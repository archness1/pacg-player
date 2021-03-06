import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { firestore } from "firebase/app";
import { useCallback, useState } from "react";

const collection = (systemId: string, deckId: string) =>
  systemId && deckId
    ? db
        ?.collection("wiki")
        .doc(systemId)
        .collection("deck")
        .doc(deckId)
        .collection("card")
    : undefined;

export interface Card {
  removed: boolean;
  name: string;
  subDeck?: string;
  type?: string;
  count?: number;
  traits?: string[];
  image?: string;
  powers?: string;
}

export function useCards(systemId: string, deckId: string, deleted?: boolean) {
  const start = collection(systemId, deckId);

  return useCollection(
    (deleted ? start : start?.where("removed", "==", false))?.orderBy("name")
  ) as [firestore.QuerySnapshot<Card> | undefined, boolean, Error | undefined];
}

export function useCreateCard(systemId: string, deckId: string) {
  return useCallback(
    () =>
      collection(systemId, deckId)?.add({
        name: "New Card",
        removed: false,
        systemId,
        image: "",
        traits: [],
        skills: {},
        base: {
          powers: [],
          handSize: {
            base: 0,
            add: 0,
          },
          proficiencies: [],
        },
        roles: [],
        cardsList: {},
        extraCardsText: {},
      }),
    [deckId, systemId]
  );
}

export function useUpdateCard(
  systemId: string,
  deckId: string,
  id: string
): [(sys: Card) => Promise<void> | undefined, Error | undefined] {
  const [updateError, setUpdateError] = useState<Error | undefined>();

  return [
    useCallback(
      (sys: Card) =>
        collection(systemId, deckId)?.doc(id).set(sys).catch(setUpdateError),
      [deckId, id, systemId]
    ),
    updateError,
  ];
}

export function useCard(systemId: string, deckId: string, id: string) {
  return useDocument(id ? collection(systemId, deckId)?.doc(id) : null) as [
    firestore.DocumentSnapshot<Card> | undefined,
    boolean,
    Error | undefined
  ];
}
