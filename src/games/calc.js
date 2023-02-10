import generateRandomNumber from '../utils.js';
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
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = operators[generateRandomNumber(0, operators.length)];
    const rightAnswer = String(calculate(operator, num1, num2));
    const question = `${num1} ${operator} ${num2}`;
    return [question, rightAnswer];
  };
  startGame(description, buildDataGame);
};

export default playCalc;
