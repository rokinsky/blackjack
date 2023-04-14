import { sum } from './lib/sum.js';
import { cartesian } from "./lib/cartesian.js";
import { Rank } from "./ranks.js";
import { cardOf } from "./card.js";
import { Suit } from "./suits.js";

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

function test0() {
  const hand = [];
  const result = evaluateHand(hand);
  console.assert(result === 0);
}

function test1() {
  const hand = [cardOf(Rank.ace, Suit.hearts)];
  const result = evaluateHand(hand);
  console.assert(result === 11);
}

function test2() {
  const hand = [cardOf(Rank.jack, Suit.hearts)];
  const result = evaluateHand(hand);
  console.assert(result === 10);
}

function test3() {
  const hand = [
    cardOf(Rank.ace, Suit.hearts),
    cardOf(Rank.ace, Suit.diamonds),
    cardOf(Rank.ace, Suit.clubs),
    cardOf(Rank.ace, Suit.spades)
  ];
  const result = evaluateHand(hand);
  console.assert(result === 14);
}

function test4() {
  const hand = [
    cardOf(Rank.ace, Suit.hearts),
    cardOf(Rank.jack, Suit.hearts)
  ];
  const result = evaluateHand(hand);
  console.assert(result === BlackJack);
}

function test5() {
  const hand = [
    cardOf(Rank.jack, Suit.hearts),
    cardOf(Rank.ten, Suit.spades),
    cardOf(Rank.ace, Suit.spades)
  ];
  const result = evaluateHand(hand);
  console.assert(result === BlackJack);
}

function test6() {
  const hand = [
    cardOf(Rank.jack, Suit.hearts),
    cardOf(Rank.two, Suit.hearts),
    cardOf(Rank.ten, Suit.hearts)
  ];
  const result = evaluateHand(hand);
  console.assert(result === Bust);
}

test0();
test1();
test2();
test3();
test4();
test5();
test6();
