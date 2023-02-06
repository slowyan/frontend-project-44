import generateRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return `Unknown operator: ${operator}`;
  }
};

const description = 'What is the result of the expression?';

const playCalc = () => {
  const buildDataGame = () => {
    const num1 = generateRandomNumber(0, 25);
    const num2 = generateRandomNumber(0, 25);
    const operator = operators[generateRandomNumber(0, operators.length - 1)];
    const rightAnswer = String(calculate(operator, num1, num2));
    const question = `${num1} ${operator} ${num2}`;
    return [question, rightAnswer];
  };
  startGame(description, buildDataGame);
};

export default playCalc;
