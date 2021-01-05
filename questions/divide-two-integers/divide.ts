//js的Number.MAX_SAFE_INTEGER远大于1<<31，而且即使溢出，溢出处理也和其他语言不一样
export default function divide (dividend:number, divisor:number):number {
  if (dividend === (1 << 31) && divisor === -1) {
    return ~(1 << 31)
  }
  let a = dividend > 0 ? dividend : (~dividend + 1);
  let b = divisor > 0 ? divisor : (~divisor + 1);
  let quotient = 0;
  for (let i = 31; i >= 0; i--) {
    if ((a >>> i) >= b) {
      quotient = quotient + (1 << i);
      a = a - (b << i);
    }
  }
  if ((dividend ^ divisor) < 0) {
    quotient = (~quotient) + 1;
  }
  return quotient
}
