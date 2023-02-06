import generateRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gcd = (n1, n2) => {
  let num1 = n1;
  let num2 = n2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
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
