import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const findGcd = (n1, n2) => {
  let num1 = n1;
  let num2 = n2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const description = 'Find the greatest common divisor of given numbers.';

const buildDataGame = () => {
  const num1 = generateRandomNumber(0, 101);
  const num2 = generateRandomNumber(0, 101);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(findGcd(num1, num2));
  return [question, rightAnswer];
};

const playFindGcd = () => {
  startGame(description, buildDataGame);
};

export default playFindGcd;
