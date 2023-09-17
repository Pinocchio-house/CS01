export function dec2bin(input: number): null | boolean[] {
  if (input % 1 !== 0) return null;

  const result: boolean[] = [];

  while (input !== 0) {
    result.push(input % 2 !== 0);
    input = Math.floor(input / 2);
  }
  return result;
}

console.log(dec2bin(10));