import React, { ReactNode } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
  children: ReactNode;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  methods: UseFormReturn<any>;
};

const FormProvider = ({ children, onSubmit, methods }: Props) => (
  <Form {...methods}>
    <form onSubmit={onSubmit}>{children}</form>
  </Form>
);

export default FormProvider;
