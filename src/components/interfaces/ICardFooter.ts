import { ChangeEvent, MouseEvent } from 'react';

export interface ICardFooter {
  id: string;
  status?: string;
  onStatusChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: 
    MouseEvent<HTMLButtonElement> | 
    MouseEvent<HTMLAnchorElement>) => void;
};
