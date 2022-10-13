import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = TextFieldProps & { name: string };

const RHFTextField = ({ name, ...props }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} error={!!error} helperText={error?.message} {...props} />
      )}
    />
  );
};

export default RHFTextField;
