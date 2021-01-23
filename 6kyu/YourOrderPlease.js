// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  if (!words) return "";
  let res = new Array(words.split(" ").length).fill(0);
  for (let w of words.split(" ")) {
    let w2 = parseInt(w.replace(/[a-zA-Z]/g, ""));
    res[w2-1] = w;
  }
  return res.join(" ");
}

order("is2 Thi1s T4est 3a");                //?$=="Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2");  //?$=="Fo1r the2 g3ood 4of th5e pe6ople"
order("");                                  //?$==""