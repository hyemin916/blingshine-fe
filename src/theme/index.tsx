import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { ReactNode } from 'react';

import palette from './palette';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const theme = createTheme({ palette });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
