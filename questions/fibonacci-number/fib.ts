export default function fib(n: number): number {
  const sqrt5 = Math.pow(5,0.5);
  return parseInt(String(1 / sqrt5 * (Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n))));
}
