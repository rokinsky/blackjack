import { deckOfCards } from "./deck.js";
import { Bust, evaluateHand } from "./evaluate-hand.js";
import { evaluateRound } from "./evaluate-round.js";
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

  const result = evaluateRound(playerHand, dealerHand);
  alert(result);
}

main();
