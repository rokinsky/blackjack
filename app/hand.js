import { cardToString } from "./card.js";
import { Bust, evaluateHand } from "./evaluate-hand.js";

export function handToString(hand) {
  return hand.map(cardToString).join(", ");
}

export function evaluatedHandToString(hand) {
  const scores = evaluateHand(hand);
  return `${handToString(hand)} (=${scores === Bust ? "∞" : scores})`;
}
