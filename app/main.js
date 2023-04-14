import { deckOfCards } from "./deck.js";
import { evaluatedHandToString } from "./hand.js";

function main() {
  const card0 = deckOfCards[0];
  const card1 = deckOfCards[1];
  const card2 = deckOfCards[2];
  const card3 = deckOfCards[3];
  const card4 = deckOfCards[4];
  const card5 = deckOfCards[5];
  const hand = [card0, card1, card2, card3, card4, card5];

  alert(evaluatedHandToString(hand));
}

main();
