import { cardOf, cardToString } from "./card.js";
import { Bust, evaluateHand } from "./evaluate-hand.js";
import { Rank } from "./ranks.js";
import { Suit } from "./suits.js";

export function handToString(hand) {
  return hand.map(cardToString).join(", ");
}

export function evaluatedHandToString(hand) {
  const scores = evaluateHand(hand);
  return `${handToString(hand)} (=${scores === Bust ? "∞" : scores})`;
}

function test0() {
  const hand = [
    cardOf(Rank.ace, Suit.clubs),
    cardOf(Rank.ace, Suit.spades),
    cardOf(Rank.ace, Suit.hearts),
    cardOf(Rank.ace, Suit.diamonds)
  ];
  const actual = evaluatedHandToString(hand);
  const expected = 'Ac, As, Ah, Ad (=14)';
  console.assert(actual === expected);
}

test0();
