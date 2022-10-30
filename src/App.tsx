import './global.css';

import React from 'react';

import Router from '@/Router';
import DebugAtoms from '@/store/DebugAtoms';
import ThemeProvider from '@/theme';

const App = () => {
  return (
    <ThemeProvider>
      <main>
        <DebugAtoms />
        <Router />
      </main>
    </ThemeProvider>
  );
};

export default App;
