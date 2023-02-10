import generateRandomNumber, { trueOrFalse } from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const buildDataGame = () => {
    const randomNum = generateRandomNumber(2, 199);

    const question = randomNum;
    const rightAnswer = trueOrFalse(isPrime(randomNum));
    return [question, rightAnswer];
  };
  startGame(description, buildDataGame);
};
export default playPrime;
