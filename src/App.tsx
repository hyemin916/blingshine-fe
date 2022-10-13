import React from 'react';

import Router from '@/Router';
import DebugAtoms from '@/store/DebugAtoms';
import ThemeProvider from '@/theme';

const App = () => {
  return (
    <ThemeProvider>
      <DebugAtoms />
      <Router />
    </ThemeProvider>
  );
};

export default App;
