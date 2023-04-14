import {
  playerLosesMessage,
  playerNeitherWinsNorLosesMessage,
  playerWinsMessage
} from "./messages.js";
import { Bust, evaluateHand } from "./evaluate-hand.js";

export function evaluateRound(playerHand, dealerHand) {
  const dealerScores = evaluateHand(dealerHand);
  const playerScores = evaluateHand(playerHand);

  if (playerScores === Bust) {
    return playerLosesMessage(playerHand, dealerHand);
  } else if (dealerScores === Bust) {
    return playerWinsMessage(playerHand, dealerHand);
  } else if (dealerScores === playerScores) {
    return playerNeitherWinsNorLosesMessage(playerHand, dealerHand);
  } else if (dealerScores > playerScores) {
    return playerLosesMessage(playerHand, dealerHand);
  } else {
    return playerWinsMessage(playerHand, dealerHand);
  }
}
