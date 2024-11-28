import zod from "zod";

export const zodValidation = (obj) => {
    const schema = zod.object({
        fullname : zod
            .string()
            .min(1 , { message: "Fullname cannot be empty" })
            .regex(/^[a-zA-Z\s]+$/, { message: "Fullname must contain only alphabets and spaces" }),
        email : zod.string().email().min(1, { message: "Email cannot be empty" }),
        password : zod.string().min(6 , {message : "Password must be 6 or more charcter long"})
    });

    const response = schema.safeParse(obj);

    return response;
};