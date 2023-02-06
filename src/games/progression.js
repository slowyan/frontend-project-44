import generateRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (firstNum, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + i * step);
  }
  return progression;
};

const playProgression = () => {
  const buildDataGame = () => {
    const firstNumber = generateRandomNumber(1, 19);
    const step = generateRandomNumber(1, 9);
    const maxLength = generateRandomNumber(5, 11);

    const progression = makeProgression(firstNumber, step, maxLength);
    const itemToHide = generateRandomNumber(0, progression.length - 1);
    progression[itemToHide] = '..';
    const rightAnswer = progression[itemToHide];
    const question = progression;

    return [question, rightAnswer];
  };
  startGame(description, buildDataGame);
};

export default playProgression;
