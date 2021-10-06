import rockPNG from "../assets/images/rock.png";
import paperPNG from "../assets/images/paper.png";
import scissorsPNG from "../assets/images/scissors.png";

export const randomNum = ({ min = 0, max = 10 }) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const findRandomFromArray = (arr) => arr[randomNum({ max: arr.length })];

export const availableChoices = [
  { id: 1, label: "rock", icon: rockPNG },
  { id: 2, label: "paper", icon: paperPNG },
  { id: 3, label: "scissors", icon: scissorsPNG },
];
