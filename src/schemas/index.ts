import { z } from "zod";

const phoneRegExp = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,8}$"
);

export const personalInfoSchema = z.object({
  name: z.string().min(1, { message: "Name is a required field" }),
  email: z
    .string()
    .min(1, { message: "Email is a required field" })
    .email({ message: "Invalid email" }),
  phone: z
    .string()
    .min(1, { message: "Phone is a required field" })
    .trim()
    .regex(phoneRegExp, { message: "Invalid phone" }),
});

export type PersonalInfoInputs = z.infer<typeof personalInfoSchema>;

export const selectPlanSchema = z.object({
  "select-plan": z
    .string()
    .min(1, { message: "You need to select a plan before continue" }),
  "billed-yearly": z.boolean(),
});

export type SelectPlanInputs = z.infer<typeof selectPlanSchema>;
