function toPostfix (infix) {
  let out = "", ops = [], inp = infix.split("");
  let opp = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3, '(': 4, ')': 4};
  while (inp.length > 0) {
    let tk = inp.shift();
    if (tk.match(/[0-9]/)) {
      out += tk;
    } else if (tk.match(/[+|\-|*|/|^]/)) {
      if (ops.length > 0) {
        while (ops[ops.length-1] !== '(' && (getAssoc(tk) === "lr" && opp[tk] <= opp[ops[ops.length-1]]) || (getAssoc(tk) === "rl" && opp[tk] < opp[ops[ops.length-1]])) {
          out += ops.pop();
        }
      }
      ops.push(tk);
    } else if (tk === "(") {
      ops.push(tk);
    } else if (tk === ")") {
      while (ops[ops.length-1] !== '(' && ops.length > 0) {
        out += ops.pop();
      }
      ops.pop();
    } else {
      console.log(`Token '${tk}' invalid!`);
    }
  }
  while (ops.length > 0) {
    if (ops[ops.length-1] === "(") return "ERR: MMP";
    out += ops.pop();
  }
  return out;
}

function getAssoc(op) {
  if (op === "^") {
    return "rl";
  } else {
    return "lr";
  }
}

toPostfix("2+7*5");             //?
toPostfix("1^2^3");             //?
toPostfix("3*3/(7+1)");         //?
toPostfix("5+(6-2)*9+3^(7-1)")  //?