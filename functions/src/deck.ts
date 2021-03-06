// import * as admin from "firebase-admin";
// import * as classDecks from "../../src/oldData/classDecks.json";
// import * as adventures from "../../src/oldData/adventures.json";
// import { PlayerCharacter } from "../../src/firestore/characters";
// import * as characters from "../../src/oldData/characters.json";
import * as functions from "firebase-functions";
//
// const firestore = admin.firestore();
//
// function substituteCards(
//   box: typeof classDecks["Alchemist Class Deck"],
//   subs: { [adventure: string]: { [cards: string]: [string, string] } }
// ) {
//   const insertedImages: any = {};
//   box.Decks = { ...box.Decks };
//   box.DeckImages = { ...box.DeckImages };
//   (Object.keys(subs) as (keyof typeof box.Decks)[]).forEach((adventureName) => {
//     if (box.Decks[adventureName]) {
//       box.Decks[adventureName] = { ...box.Decks[adventureName] } as any;
//       const deck = box.Decks[adventureName] as any;
//       Object.keys(subs[adventureName]).forEach((card) => {
//         if (deck[card]) {
//           const source =
//             subs[adventureName][card][0] === "Core"
//               ? adventures["Core Set"]
//               : adventures["Curse of the Crimson Throne"];
//           const sourceCard = (source.Decks as any)[
//             subs[adventureName][card][1]
//           ]?.[card];
//
//           if (sourceCard) {
//             const sourceDeck = (source.DeckImages as any)[sourceCard.deck];
//
//             if (!insertedImages[sourceDeck.url]) {
//               const newId = Object.keys(box.DeckImages).length.toString();
//               (box.DeckImages as any)[newId] = sourceDeck;
//               insertedImages[sourceDeck.url] = newId;
//             }
//
//             deck[card].Description = deck[card].Description + ", Substitution";
//             deck[card].deck = insertedImages[sourceDeck.url];
//             deck[card].x = sourceCard.x;
//             deck[card].y = sourceCard.y;
//           }
//         }
//       });
//     }
//   });
//   return box;
// }
//
// function addMetadata(data: PlayerCharacter) {
//   const boxes: any = {};
//
//   if (data.deckOne && (classDecks as any)[data.deckOne]) {
//     boxes[data.deckOne] = (classDecks as any)[data.deckOne];
//
//     if (data.deckOneSubstitutions) {
//       boxes[data.deckOne] = substituteCards(
//         boxes[data.deckOne],
//         data.deckOneSubstitutions
//       );
//     }
//   }
//   if (data.deckTwo && (classDecks as any)[data.deckTwo]) {
//     boxes[data.deckTwo] = (classDecks as any)[data.deckTwo];
//
//     if (data.deckTwoSubstitutions) {
//       boxes[data.deckTwo] = substituteCards(
//         boxes[data.deckTwo],
//         data.deckTwoSubstitutions
//       );
//     }
//   }
//   if (data.deckThree && (classDecks as any)[data.deckThree]) {
//     boxes[data.deckThree] = (classDecks as any)[data.deckThree];
//
//     if (data.deckThreeSubstitutions) {
//       boxes[data.deckThree] = substituteCards(
//         boxes[data.deckThree],
//         data.deckThreeSubstitutions
//       );
//     }
//   }
//
//   return {
//     cards: [
//       ...(data.cardsOne?.map((v) => ({
//         box: data.deckOne,
//         ...v,
//       })) || []),
//       ...(data.cardsTwo?.map((v) => ({
//         box: data.deckTwo,
//         ...v,
//       })) || []),
//       ...(data.cardsThree?.map((v) => ({
//         box: data.deckThree,
//         ...v,
//       })) || []),
//     ],
//     boxes,
//     characterDeck: data.characterDeck,
//     characterName: data.character,
//     character:
//       (characters as any)[data.character as string]?.[
//         data.characterDeck as string
//       ] || null,
//     characterData: {
//       Strength: data.Strength,
//       Dexterity: data.Dexterity,
//       Constitution: data.Constitution,
//       Intelligence: data.Intelligence,
//       Wisdom: data.Wisdom,
//       Charisma: data.Charisma,
//       handSize: data.handSize,
//       proficiencies: data.proficiencies,
//       powers: data.powers,
//       role: data.role,
//       deckList: data.deckList,
//       roleHandSize: data.roleHandSize,
//       roleProficiencies: data.roleProficiencies,
//       rolePowers: data.rolePowers,
//     },
//   };
// }
//
// export const getTTSDeck = functions.https.onRequest((request, response) => {
//   firestore
//     .collection("account_characters")
//     .doc(request.path.substr(1))
//     .get()
//     .then((doc: any) => {
//       if (!(doc && doc.exists)) {
//         return response.status(404).send({ error: "Unable to find the deck" });
//       }
//       const data = doc.data();
//       return response.status(200).send(addMetadata(data));
//     })
//     .catch((err: any) => {
//       console.error(err);
//       return response
//         .status(404)
//         .send({ error: "Unable to retrieve the deck" });
//     });
// });
//
// export const getTTSDeckByOrgPlayId = functions.https.onRequest(
//   (request, response) => {
//     firestore
//       .collection("account_characters")
//       .where("orgPlayId", "==", request.path.substr(1))
//       .get()
//       .then((doc) => {
//         if (!(doc && doc.docs[0])) {
//           return response
//             .status(404)
//             .send({ error: "Unable to find the deck" });
//         }
//         const data = doc.docs[0].data() as PlayerCharacter;
//         return response.status(200).send(addMetadata(data));
//       })
//       .catch((err: any) => {
//         console.error(err);
//         return response
//           .status(404)
//           .send({ error: "Unable to retrieve the deck" });
//       });
//   }
// );
export const getTTSDeck = functions.https.onRequest(() => {
  throw new Error();
});
export const getTTSDeckByOrgPlayId = functions.https.onRequest(() => {
  throw new Error();
});
