import { z } from 'zod';

const academicValidationSchema = z.object({
  name: z.string,
});
