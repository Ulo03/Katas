//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript
import {assertEquals} from '../testing.js';

function simple_assembler(program) {
  var res = {};
  for (let i = 0; i < program.length; i++) {
    let cmd = program[i];
    let args = cmd.split(' ');
    if (args[0] == 'mov') {
      if (args[2].match(/-?[0-9]+/g)) {
        res[args[1]] = parseInt(args[2]);
      } else if (/[a-zA-Z]+/g) {
        res[args[1]] = parseInt(res[args[2]]);
      }
    } else if (args[0] == 'inc') {
      res[args[1]] = parseInt(res[args[1]]) + 1;
    } else if (args[0] == 'dec') {
      res[args[1]] = parseInt(res[args[1]]) - 1;
    } else if (args[0] == 'jnz') {
      if (parseInt(res[args[1]]) != 0) {
        i += parseInt(args[2]);
        i--;
      }
    }
  }
  return res;
}

Deno.test('simpleAssembler', () => {
  assertEquals(
    simple_assembler([
      'mov a 5',
      'inc a',
      'dec a',
      'dec a',
      'jnz a -1',
      'inc a',
    ]),
    {a: 1}
  );
  assertEquals(
    simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
    {a: 0, b: -20}
  );
});
