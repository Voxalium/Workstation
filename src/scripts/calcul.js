export function RandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
export function getRandomInt() {
  const a = RandomInt(10);
  const b = RandomInt(10);
  return { a, b };
}
export function Add(a, b) {
  return a + b;
}
export function Sub(a, b) {
  return a - b;
}
export function Mul(a, b) {
  return a * b;
}
export function Div(a, b) {
  return a / b;
}
