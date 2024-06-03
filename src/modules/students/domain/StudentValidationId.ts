import { z } from "zod";

export const ensureIsValidId = (id: string) => {
    
    const idSchema = z.string().min(1);
    const validationResult = idSchema.safeParse(id);


    if (!validationResult.success) {
        throw new Error("Invalid id");
    }

}