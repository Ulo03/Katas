// https://www.codewars.com/kata/550554fd08b86f84fe000a58

const inArray = (a1,a2) => {
  a1 = a1.filter(e => { return e != null }), a2 = a2.filter(e => { return e != null });
  var a3 = a1.map(e => { return a2.map(e2 => { return (e2.includes(e)) ? e : null}).filter((e) => {return e != null})}), a4 = [];
  for(let i = 0; i < a3.length; i++){ a4 = a4.concat(a3[i]).sort(); }
  return [...new Set(a4)];
}

//Tests
const test = (x1,x2,e) => {
  return inArray(x1,x2) == e;
}
const t2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(test(["xyz", "live", "strong"],t2,["live", "strong"])       );
console.log(test(["live", "strong", "arp"],t2,["arp", "live", "strong"]));
console.log(test(["tarp", "mice", "bull"] ,t2,[])                       );