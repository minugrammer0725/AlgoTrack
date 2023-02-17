import { IDisabled } from "./IDisabled";
import { ChangeEvent } from "react";

export interface ITextField extends IDisabled {
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};