import {z} from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Se requiere un titulo"
    }),
    description: z.string({
        required_error: "Se requiere una descripcion"
    }),
    date: z.string().datetime().optional(),
});