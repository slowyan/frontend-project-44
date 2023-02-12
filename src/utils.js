const generateRandomNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min) + min);
export default generateRandomNumber;
