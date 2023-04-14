// https://en.wikipedia.org/wiki/Fisher-Yates_shuffle#The_modern_algorithm
export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function test0() {
  const array = [0, 1, 2];
  const result = shuffleArray(array);
  console.assert(result.length === array.length);
  console.assert(array[0] === 0 && array[1] === 1 && array[2] === 2);
}

test0();
