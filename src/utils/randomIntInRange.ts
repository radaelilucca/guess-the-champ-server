interface IGetRandomIntInRangeProps {
  min: number;
  max: number;
}

const getRandomIntInRange = ({ min, max }: IGetRandomIntInRangeProps) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export { getRandomIntInRange };
