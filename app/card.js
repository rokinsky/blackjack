import { Rank } from "./ranks.js";
import { Suit } from "./suits.js";

export function cardOf(rank, suit) {
  return { rank, suit };
}

export function cardToString(card) {
  return `${card.rank}${card.suit}`;
}

function test0() {
  console.assert(cardToString(cardOf(Rank.fourth, Suit.spades)) === '4s');
}

test0();
