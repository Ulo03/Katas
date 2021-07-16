const m = require('../SNS1');

test('X < 1000', () => {
  expect(m.balancedNum(7)).toStrictEqual("Balanced");
  expect(m.balancedNum(959)).toStrictEqual("Balanced");
  expect(m.balancedNum(13)).toStrictEqual("Balanced");
  expect(m.balancedNum(432)).toStrictEqual("Not Balanced");
  expect(m.balancedNum(424)).toStrictEqual("Balanced");
});

test('X > 1000', () => {
  expect(m.balancedNum(1024)).toStrictEqual("Not Balanced");
  expect(m.balancedNum(66545)).toStrictEqual("Not Balanced");
  expect(m.balancedNum(295591)).toStrictEqual("Not Balanced");
  expect(m.balancedNum(1230987)).toStrictEqual("Not Balanced");
  expect(m.balancedNum(56239814)).toStrictEqual("Balanced");
});

/*
balancedNum(7);   //?.$=="Balanced"
balancedNum(959); //?.$=="Balanced"
balancedNum(13);  //?.$=="Balanced"
balancedNum(432); //?.$=="Not Balanced"
balancedNum(424); //?.$=="Balanced"

balancedNum(1024);    //?.$=="Not Balanced"
balancedNum(66545);   //?.$=="Not Balanced"
balancedNum(295591);  //?.$=="Not Balanced"
balancedNum(1230987); //?.$=="Not Balanced"
balancedNum(56239814);//?.$=="Balanced"*/
