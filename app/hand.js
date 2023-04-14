import { cardToString } from "./card.js";

export function handToString(hand) {
  return hand.map(cardToString).join(", ");
}
