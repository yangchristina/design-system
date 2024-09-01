import { customAlphabet, nanoid } from 'nanoid'

export const numAlphNanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8)

export default nanoid