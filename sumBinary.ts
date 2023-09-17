import dec2bin from "./dec2bin";

function sumBinary(a:boolean[], b:boolean[]) {
  let carry = 0;
  let index1 = 0;
  let index2 = 0;
  const result: number[] = [];

  while (index1 < a.length || index2 < b.length || carry) {
    const sum = (a[index1] ? 1 : 0) + (b[index2] ? 1 : 0) + carry;
    result.push(sum % 2 ? 1 : 0);
    carry = Math.floor(sum / 2);
    index1++;
    index2++;
  }
  return result;
}

console.log(sumBinary(dec2bin(5)!, dec2bin(10)!))