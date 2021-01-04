export default function divide (dividend:number, divisor:number):number {
  let a = dividend > 0 ? dividend : (~dividend + 1);
  let b = divisor > 0 ? divisor : (~divisor + 1);
  let quotient = 0;
  // let remainder = 0;
  for (let i = 31; i >= 0; i--) {
    if ((a >> i) >= b) {
      quotient = quotient +(1 << i);
      a = a -(b << i)
    }
  }
  if ((dividend ^ divisor) < 0) {
    quotient = (~quotient) + 1;
  }
  return quotient
}
