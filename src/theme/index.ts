import { theme as green } from "./presets/green";
import { theme as blue } from "./presets/blue";
import { theme as _default } from "./presets/default";
import { theme as red } from "./presets/red";
import { theme as venue } from "./presets/venue";
import { Palette, PaletteColor } from "@mui/material/styles";
import { DeepPartial } from "../utility/types";

declare module "@mui/material/styles" {
  interface Palette {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
  interface PaletteOptions {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}

export interface AppTheme {
  dark: {
    palette: DeepPartial<Palette>;
  };
  light: {
    palette: DeepPartial<Palette>;
  };
}

export const color = {
  0: venue,
  1: _default,
  2: blue,
  3: red,
  4: green,
};
