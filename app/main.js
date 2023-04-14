import { deckOfCards } from "./deck.js";
import { Bust, evaluateHand } from "./evaluate-hand.js";
import { evaluatedHandToString } from "./hand.js";
import { dealerHandMessage } from "./messages.js";
import { dealerHitOrStand, play, playerHitOrStand } from "./play.js";

function main() {
  const deck = [...deckOfCards];

  let dealerHand = [deck.pop()];
  let playerHand = [deck.pop(), deck.pop()];

  alert(dealerHandMessage(dealerHand));

  playerHand = play(deck, playerHand, playerHitOrStand);

  if (evaluateHand(playerHand) !== Bust) {
    dealerHand = play(deck, dealerHand, dealerHitOrStand);
  }

  const playerResult = evaluatedHandToString(playerHand);
  alert(playerResult);

  const dealerResult = evaluatedHandToString(dealerHand);
  alert(dealerResult);
}

main();
