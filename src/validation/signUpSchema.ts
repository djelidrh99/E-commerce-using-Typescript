import { z } from "zod";

const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Must be a valid email adresse" }),
  password: z
    .string()
    .min(8, { message: "Password Must be 8 or more characters long" })
    .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, {
      message: "Must be have 1 or more special characters ",
    }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm password is required" })
}).refine((input)=>input.password===input.confirmPassword,{
  message: "Password and Confirm Password does not match",
  path: ["confirmPassword"],
})

type signUpType = z.infer<typeof registerSchema>

export {registerSchema,type signUpType}