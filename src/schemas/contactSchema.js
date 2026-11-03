import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must not exceed 50 characters' }),
  email: z.email({ message: 'Please enter a valid email address' }),
  phone: z.e164({
    message: 'Phone number must be in E.164 format (e.g., +628123456789)',
  }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message must not exceed 1000 characters' }),
});
