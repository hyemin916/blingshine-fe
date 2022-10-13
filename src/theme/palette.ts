import type { PaletteColorOptions, PaletteOptions, TypeText } from '@mui/material';

const PRIMARY: PaletteColorOptions = {
  main: '#18AEEA',
  light: '#37D2E2',
  contrastText: '#FFFFFF',
} as const;

const ERROR: PaletteColorOptions = {
  main: '#E91F27',
} as const;

const TEXT: Partial<TypeText> = {
  primary: '#222832',
};

const palette: Readonly<PaletteOptions> = {
  common: { black: '#222832', white: '#FFFFFF' },
  text: { ...TEXT },
  primary: { ...PRIMARY },
  error: { ...ERROR },
  background: { default: '#F7F7FA' },
} as const;

export default palette;
