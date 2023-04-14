export function cartesian(arrays) {
  if (arrays.length === 0) return [[]];
  if (arrays.length === 1) return [...arrays];
  return arrays.reduce((product, array) => product.flatMap(combination => array.map(item => [...combination, item])), [[]]);
}

const arrayToString = (array) => `[${array.join(", ")}]`;

function test0() {
  const arrays = [[]];
  const result = cartesian(arrays);
  const string = arrayToString(result.map(arrayToString));
  console.assert(string === "[[]]");
}

function test1() {
  const arrays = [[1]];
  const result = cartesian(arrays);
  const string = arrayToString(result.map(arrayToString));
  console.assert(string === "[[1]]");
}

function test2() {
  const arrays = [[1], [2]];
  const result = cartesian(arrays);
  const string = arrayToString(result.map(arrayToString));
  console.assert(string === "[[1, 2]]");
}

function test3() {
  const arrays = [[1, 2], [3, 4, 5]];
  const result = arrayToString(cartesian(arrays).map(arrayToString));
  console.assert(result === "[[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]");
}

test0();
test1();
test2();
test3();
