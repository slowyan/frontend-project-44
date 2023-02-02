import readlineSync from 'readline-sync';

const runBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const randomNum = Math.round(Math.random() * 10);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = randomNum % 2 === 0 ? 'no' : 'yes';
    if (answer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runBrainEven;
