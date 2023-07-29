import * as z from 'zod'

export const registerSchemaUser = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({
      message: 'Please enter a valid email',
    }),
    password: z
      .string()
      .max(100)
      .min(6, { message: 'Password must be at least 6 characters long' }),
    repeatPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  })

export const loginSchemaUser = z.object({
  email: z.string().email({
    message: 'Please enter a valid email',
  }),
  password: z
    .string()
    .max(100)
    .min(6, { message: 'Password must be at least 6 characters long' }),
})
