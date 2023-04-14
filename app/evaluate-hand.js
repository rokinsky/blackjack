import { sum } from './lib/sum.js';
import { cartesian } from "./lib/cartesian.js";
import { Rank } from "./ranks.js";

const rankValues = {
  [Rank.ace]: [1, 11],
  [Rank.king]: [10],
  [Rank.queen]: [10],
  [Rank.jack]: [10],
  [Rank.ten]: [10],
  [Rank.nine]: [9],
  [Rank.eight]: [8],
  [Rank.seven]: [7],
  [Rank.six]: [6],
  [Rank.five]: [5],
  [Rank.fourth]: [4],
  [Rank.three]: [3],
  [Rank.two]: [2],
};

export const BlackJack = 21;

export const Bust = -Infinity;

export function evaluateHand(hand) {
  const values = hand.map((card) => rankValues[card.rank]);
  const sums = values.length === 1 ? values.flat() : cartesian(values).map(sum);
  const candidates = sums.filter((value) => value <= BlackJack);
  return Math.max(...candidates);
}
