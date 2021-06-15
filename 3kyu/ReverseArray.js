import { assertEquals } from "../testing.js";
let reverse;
// Reverse Array with Code <= 30 Bytes

reverse=a=>[...a].map(a.pop,a) //30 Bytes

Deno.test('TestCases 1', () => {
  assertEquals(reverse([1,2,3]), [3,2,1]);
});