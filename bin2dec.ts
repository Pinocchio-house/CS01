import { dec2bin } from './dec2bin';

function bin2dec(input: boolean[]):number {
  return input.reduce(
    ([bitValue, decimalValue], boolean) => {
      return [bitValue * 2, decimalValue + (boolean ? 1 : 0) * bitValue];
    },
    [1, 0]
  )[1];
}

console.log(bin2dec(dec2bin(10)!));
