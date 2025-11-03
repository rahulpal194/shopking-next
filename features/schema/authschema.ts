import * as z from "zod/v4";

export const loginschema = z.object({
    email: z.string("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})