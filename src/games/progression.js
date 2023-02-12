import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (firstNum, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + i * step);
  }
  return progression;
};

const buildDataGame = () => {
  const firstNumber = generateRandomNumber();
  const step = generateRandomNumber(1, 9);
  const maxLength = generateRandomNumber(5, 11);

  const progression = makeProgression(firstNumber, step, maxLength);
  const indexToHide = generateRandomNumber(0, progression.length);

  const rightAnswer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');

  return [question, rightAnswer];
};

const playProgression = () => {
  startGame(description, buildDataGame);
};

export default playProgression;
