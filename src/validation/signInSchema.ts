import { z } from "zod";

const loginSchema = z.object({

  email: z.string().email({ message: "Must be a valid email adresse" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
})

type signInType = z.infer<typeof loginSchema>

export {loginSchema,type signInType}