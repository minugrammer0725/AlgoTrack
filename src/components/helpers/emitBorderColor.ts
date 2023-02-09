import { CounterStatusType } from "../interfaces/ICounter"

import { Status } from "../enums/Status";

export const emitBorderColor = (status: CounterStatusType): string => {
  let color;
  switch (status) {
    case Status.todo:
      color = 'error.light';
      break;
    case Status.attempted:
      color = 'warning.light';
      break;
    case Status.solved:
      color = 'success.light';
      break;
  }
  return color;
};