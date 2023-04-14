export function sum(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

function test0() {
  const array = [1, 2, 3];
  const actual = sum(array);
  console.assert(actual === 6);
}

test0();
