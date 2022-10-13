import { useAtomsDebugValue } from 'jotai/devtools';
import React from 'react';

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export default DebugAtoms;
