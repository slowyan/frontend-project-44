import generateRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playIsEven = () => {
  const buildDataGame = () => {
    const randomNum = generateRandomNumber(0, 21);
    const rightAnswer = isEven(randomNum);
    return [randomNum, rightAnswer];
  };
  startGame(description, buildDataGame);
};

export default playIsEven;
