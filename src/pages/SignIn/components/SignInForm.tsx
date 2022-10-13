import { LoadingButton } from '@mui/lab';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react';
import { useForm } from 'react-hook-form';

import FormProvider from '@/components/FormProvider';
import RHFTextField from '@/components/RHFTextField';
import { apiBaseUrl } from '@/consts/config';
import { authActionAtom, signInErrorAtom } from '@/store/auth.jotai';

type SignInForm = {
  username: string;
  password: string;
};

const SignInForm = () => {
  const [error, setError] = useAtom(signInErrorAtom);
  const dispatch = useSetAtom(authActionAtom);

  const defaultValues = { username: '', password: '' };
  const methods = useForm<SignInForm>({ defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (form: SignInForm) => {
    try {
      const { data: user } = await axios.post(`${apiBaseUrl}/api/auth/signin`, form);
      dispatch({ type: 'SIGN_IN', user });
    } catch (e) {
      setError('아이디와 비밀번호를 확인해주세요');
    }
  };

  return (
    <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
      <RHFTextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="ID"
        name="username"
        autoFocus
        autoComplete="username"
        data-testid="username"
      />
      <RHFTextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        data-testid="password"
      />
      {error && (
        <Typography color="error.main" data-testid="error-message">
          {error}
        </Typography>
      )}
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3, mb: 2 }}
        loading={isSubmitting}
        data-testid="login-button"
      >
        로그인
      </LoadingButton>
    </FormProvider>
  );
};

export default SignInForm;
