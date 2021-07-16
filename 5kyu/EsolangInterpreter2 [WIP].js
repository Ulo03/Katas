// https://www.codewars.com/kata/58678d29dbca9a68d80000d7
import {assertEquals} from '../testing.js';

const interpreter = (code, tape) => {
  var pt = 0,
    code = code.split(''),
    tape = tape.split('').map((e) => +e);
  for (var i = 0; i <= code.length; i++) {
    let x = code[i];
    if (pt > tape.length - 1 || pt < 0) {
      return tape.join('');
    } else if (x == '>') {
      pt++;
    } else if (x == '<') {
      pt--;
    } else if (x == '*') {
      tape[pt] = tape[pt].inv();
    } else if (x == '[') {
      if (tape[pt] == 0) {
        i = code.getMatching(i) + 1;
      }
    } else if (x == ']') {
      if (tape[pt] != 0) {
        i = code.getMatching(i);
      }
    }
  }
  return tape.join('');
};

Number.prototype.inv = function () {
  return this.valueOf() ? 0 : 1;
};

Array.prototype.getMatching = function (pos) {
  var val = this.valueOf(),
    cnt = 1;
  if (val[pos] == '[' || val[pos] == ']') {
    var mode = val[pos] == '[' ? 'fc' : 'fo';
  } else {
    return -1;
  }
  while (cnt > 0) {
    var c = val[++pos];
    if (c == '[') {
      if (mode == 'fc') {
        cnt++;
      } else if (mode == 'fo') {
        cnt--;
      }
    } else if (c == ']') {
      if (mode == 'fc') {
        cnt--;
      } else if (mode == 'fo') {
        cnt++;
      }
    }
  }
  return pos; //?
};

Deno.test('Esolang2', () => {
  assertEquals(interpreter('*', '00101100'), '10101100');
  assertEquals(interpreter('>*>*', '00101100'), '01001100');
  assertEquals(interpreter('*>*>*>*>*>*>*>*', '00101100'), '11010011');
  assertEquals(interpreter('*>*>>*>>>*>*', '00101100'), '11111111');
  assertEquals(interpreter('>>>>>*<*<<*', '00101100'), '00000000');
});
