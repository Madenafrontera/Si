import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "Es requerido un nombre de usuario"
    }),
    email: z.string({
        required_error: "Es requerido un E-mail"
    }).email({
        required_error: "El E-mail es invalido"
    }),
    password: z.string({
        required_error: "password is required"
    }).min(6, {message: "La contraseña debe tener al menos 6 carateres"})
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Es requerido un E-mail"
    }).email({
        required_error: "El E-mail es invalido"
    }).email({
        message: "La contraseña o el E-mail son invalidos"
    }),
    password: z.string({
        required_error: "La contraseña o el E-mail son invalidos"
    })
})

