const PRIMARY = {
  main: '#18AEEA',
  light: '#37D2E2',
} as const;

const ERROR = {
  main: '#E91F27',
} as const;

const palette = {
  common: { black: '#222832', white: '#FFFFFF' },
  primary: { ...PRIMARY },
  error: { ...ERROR },
} as const;

export default palette;
