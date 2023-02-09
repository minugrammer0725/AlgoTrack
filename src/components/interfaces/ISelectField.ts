import { IDisabled } from "./IDisabled";
import { ISelectOptions } from "./ISelectOptions";
import { SelectChangeEvent } from "@mui/material";

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectOptions[];
};

