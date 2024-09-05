import { z } from 'zod'

export const signInValidationSchema = z.object({
    email: z.string().email('Por favor, insira um email válido.'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
})
