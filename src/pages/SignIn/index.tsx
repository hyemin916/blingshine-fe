import { Card, Container } from '@mui/material';
import React from 'react';

import SignInForm from './components/SignInForm';

const SignIn = () => {
  return (
    <Container sx={styles.container}>
      <Card sx={styles.card}>
        <SignInForm />
      </Card>
    </Container>
  );
};

export default SignIn;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 4,
  },
};
