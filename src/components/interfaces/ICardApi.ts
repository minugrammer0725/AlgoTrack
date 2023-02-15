import { Difficulty } from "../enums/Difficulty";
import { Status } from "../enums/Status";
import { Category } from "../enums/Category";

export interface ICardApi {
  id: string;
  date: string;
  title: string;
  code: string;
  difficulty: `${Difficulty}`,
  status: `${Status}`,
  categories: `${Category}`[]
};