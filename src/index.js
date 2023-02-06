import readlineSync from 'readline-sync';

const runGame = (description, buildDataGame) => {
  // Приветствие и знакомство с игроком
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Вывод правил игры
  console.log(description);

  // Работа с телом игры
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    // Генерация вопроса и правильного ответа
    const [question, rightAnswer] = buildDataGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
