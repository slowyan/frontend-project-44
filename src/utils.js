const generateRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min) + min);
const trueOrFalse = (bool) => (bool ? 'yes' : 'no');
export default generateRandomNumber;
export { trueOrFalse };
