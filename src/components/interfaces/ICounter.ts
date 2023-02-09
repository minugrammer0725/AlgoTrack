import { Status } from "../enums/Status";

export type CounterStatusType = 
  Status.todo | 
  Status.attempted | 
  Status.solved;

export interface ICounter {
  count?: number;
  status?: CounterStatusType;
};