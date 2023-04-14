import { Bust, evaluateHand } from "./evaluate-hand.js";
import { anotherCardMessage } from "./messages.js";

export function play(deck, hand) {
  const scores = evaluateHand(hand);
  if (scores === Bust) return hand;

  const isAnotherCard = confirm(anotherCardMessage(hand));
  if (!isAnotherCard) return hand;

  return play(deck, [...hand, deck.pop()]);
}
