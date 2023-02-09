import { IDisabled } from "./IDisabled";
import { ISelectOptions } from "./ISelectOptions";
import { SelectChangeEvent } from "@mui/material";


export interface IMultiSelectField extends IDisabled {
  name?: string;
  label?: string;
  values?: string[];  // or ISelectOptions[] if I want to store option directly
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectOptions[];
};