import { ChangeEvent, MouseEvent } from 'react';

export interface ICardFooter {
  id: string;
  status?: string;
  onStatusChange?: (
    e: ChangeEvent<HTMLInputElement>,
    id: string) => void;
  onClick?: (
    e: MouseEvent<HTMLButtonElement> | 
    MouseEvent<HTMLAnchorElement>,
    id: string) => void;
};
