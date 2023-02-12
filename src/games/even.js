import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildDataGame = () => {
  const randomNum = generateRandomNumber();
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, rightAnswer];
};

const playIsEven = () => {
  startGame(description, buildDataGame);
};

export default playIsEven;
