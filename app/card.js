export function cardOf(rank, suit) {
  return { rank, suit };
}

export function cardToString(card) {
  return `${card.rank}${card.suit}`;
}
