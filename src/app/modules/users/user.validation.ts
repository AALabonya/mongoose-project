//3rd number a validation ar kaj korte hobe

import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password can to be more than 20 characters' }),
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(['student', 'faculty', 'admin']),
  status: z.enum(['in-progress', 'blocked']),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
