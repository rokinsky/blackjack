import { prettify } from "./lib/prettify.js";
import { evaluatedHandToString } from "./hand.js";

export function anotherCardMessage(playerHand) {
  return prettify({
    playerHand: evaluatedHandToString(playerHand),
    message: "Would you like to take another card?",
  });
}
