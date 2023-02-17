import { ICardApi } from "../interfaces/ICardApi";
import { Status } from "../enums/Status";

export const countCards = (cards: ICardApi[], status: `${Status}`): number => {
  if (!cards?.length) {
    return 0;
  }
  const totalCards = cards.filter((card) => {
    return card.status === status;
  })
  return totalCards.length;
};