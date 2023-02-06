/* eslint-disable no-param-reassign */
import generateRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gcd = (n1, n2) => {
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
};

const description = 'Find the greatest common divisor of given numbers.';

const playFindGcd = () => {
  const buildDataGame = () => {
    const num1 = generateRandomNumber(2, 99);
    const num2 = generateRandomNumber(2, 99);
    const question = `${num1} ${num2}`;
    const rightAnswer = String(gcd(num1, num2));
    return [question, rightAnswer];
  };
  startGame(description, buildDataGame);
};

export default playFindGcd;
