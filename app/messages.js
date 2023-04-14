import { prettify } from "./lib/prettify.js";
import { evaluatedHandToString } from "./hand.js";

export function anotherCardMessage(playerHand) {
  return prettify({
    playerHand: evaluatedHandToString(playerHand),
    message: "Would you like to take another card?",
  });
}

export function dealerHandMessage(dealerHand) {
  return prettify({
    dealerHand: evaluatedHandToString(dealerHand),
  });
}

function roundOverStatusMessage(playerHand, dealerHand, status) {
  return prettify({
    playerHand: evaluatedHandToString(playerHand),
    dealerHand: evaluatedHandToString(dealerHand),
    status: status,
  });
}

export function playerLosesMessage(playerHand, dealerHand) {
  return roundOverStatusMessage(playerHand, dealerHand, "Player loses");
}

export function playerWinsMessage(playerHand, dealerHand) {
  return roundOverStatusMessage(playerHand, dealerHand, "Player wins");
}

export function playerNeitherWinsNorLosesMessage(playerHand, dealerHand) {
  return roundOverStatusMessage(playerHand, dealerHand, "Player neither wins nor loses");
}
