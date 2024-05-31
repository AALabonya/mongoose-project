//3rd number a validation ar kaj korte hobe
import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can to be more than 20 characters' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
