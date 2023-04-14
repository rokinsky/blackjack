import { deckOfCards } from "./deck.js";
import { evaluatedHandToString } from "./hand.js";
import { play } from "./play.js";

function main() {
  const deck = [...deckOfCards];

  let playerHand = [deck.pop(), deck.pop()];

  playerHand = play(deck, playerHand);

  const result = evaluatedHandToString(playerHand);
  alert(result);
}

main();
