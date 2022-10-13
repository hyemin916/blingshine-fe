import type { Components, Theme } from '@mui/material';

const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 'bold',
      },
    },
  },
};

export default components;
