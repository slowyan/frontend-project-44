import generateRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isEven = (num) => {
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % 2 === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playPrime = () => {
  const buildDataGame = () => {
    const randomNum = generateRandomNumber(1, 199);

    const question = randomNum;
    const rightAnswer = isEven(randomNum);
    return [question, rightAnswer];
  };
  startGame(description, buildDataGame);
};
export default playPrime;
