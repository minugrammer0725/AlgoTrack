import { Difficulty } from "../enums/Difficulty";

export const cardBorderColor = (difficulty: string): string => {
  let borderColor = '';
  
  switch (difficulty) {
    case Difficulty.easy:
      borderColor = 'info.light';
      break;
    case Difficulty.medium:
      borderColor = 'grey.900';
      break;
    case Difficulty.hard:
      borderColor = 'error.light';
      break;
    default:
      borderColor = 'grey.900';
  }

  return borderColor;
};
