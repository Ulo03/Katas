// https://www.codewars.com/kata/5a55f04be6be383a50000187

const specialNumber = (n) => {
  return (n.toString().split("").every((e) => {
    return (e >= 0 && e <= 5)
  })) ? "Special!!" : "NOT!!";
}

module.exports = {specialNumber};