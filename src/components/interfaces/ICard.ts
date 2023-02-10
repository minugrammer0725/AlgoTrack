import { ICardHeader } from "./ICardHeader"
import { ICardBody } from "./ICardBody"
import { ICardFooter } from "./ICardFooter"

export interface ICard
  extends ICardHeader, ICardBody, ICardFooter {
  id?: string;
  difficulty?: string;
  status?: string;
  // category?: string[]
};