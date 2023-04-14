import { Bust, evaluateHand } from "./evaluate-hand.js";
import { anotherCardMessage } from "./messages.js";

export function playerHitOrStand(hand) {
  return confirm(anotherCardMessage(hand));
}

export function dealerHitOrStand(hand) {
  return evaluateHand(hand) <= 17; // the dealer stands on a soft 17
}

export function play(deck, hand, hitOrStand) {
  const scores = evaluateHand(hand);
  if (scores === Bust) return hand;

  const isAnotherCard = hitOrStand(hand);
  if (!isAnotherCard) return hand;

  return play(deck, [...hand, deck.pop()], hitOrStand);
}
