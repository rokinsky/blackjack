export function cartesian(arrays) {
  if (arrays.length === 0) return [[]];
  if (arrays.length === 1) return [...arrays];
  return arrays.reduce((product, array) => product.flatMap(combination => array.map(item => [...combination, item])), [[]]);
}
