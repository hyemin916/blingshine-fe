import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultValues, useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';

const useFormWithSchema = <T extends Record<string, any>>(schema: ObjectSchema<any>) => {
  const keysOfSchema = Object.keys(schema.getDefaultFromShape());
  const defaultValues = keysOfSchema.reduce(
    (obj, key) => ({
      ...obj,
      [key]: '',
    }),
    {},
  ) as DefaultValues<T>;

  return useForm<T>({
    resolver: yupResolver(schema),
    defaultValues,
  });
};

export default useFormWithSchema;
