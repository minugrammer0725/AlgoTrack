import { ICardHeader } from "./ICardHeader"
import { ICardBody } from "./ICardBody"
import { ICardFooter } from "./ICardFooter"

export interface ICard
  extends ICardHeader, ICardBody, ICardFooter {
  difficulty?: string;
  // categories?: string[]
};