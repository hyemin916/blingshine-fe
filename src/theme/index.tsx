import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import React, { ReactNode } from 'react';

import components from './components';
import palette from './palette';
import typography from './typography';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const theme = createTheme({ palette, components, typography });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
