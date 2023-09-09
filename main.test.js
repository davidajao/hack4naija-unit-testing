import isEvenOrOdd from './main';

test('number is even', () => {

  let output = isEvenOrOdd(8);

  expect(output).toBe("Even");
});

test('number is odd', () => {

  let output = isEvenOrOdd(5);

  expect(output).toBe("Odd");
});