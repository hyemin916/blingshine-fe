import { Card, Container } from '@mui/material';
import React from 'react';

import SignInForm from './components/SignInForm';

const SignIn = () => {
  return (
    <Container component="main" sx={{ mt: 40 }}>
      <Card sx={styles.card}>
        <SignInForm />
      </Card>
    </Container>
  );
};

export default SignIn;

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    m: 'auto',
    p: 4,
  },
};
