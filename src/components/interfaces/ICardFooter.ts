import { ChangeEvent, MouseEvent } from 'react';

export interface ICardFooter {
  onStatusChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onClick?: (e: 
    MouseEvent<HTMLButtonElement> | 
    MouseEvent<HTMLAnchorElement>) => void
};
