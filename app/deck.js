import { ranks } from "./ranks.js";
import { suits } from "./suits.js";
import { cardOf } from './card.js';

export const deckOfCards = ranks.flatMap((rank) => suits.map((suit) => cardOf(rank, suit)));

function test0() {
  console.assert(deckOfCards.length === 52);
}

test0();
