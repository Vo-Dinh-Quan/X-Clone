console.log('crypto.ts loaded')
import { createHash } from 'node:crypto'

export function sha256(content: string) {
  return createHash('sha256').update(content).digest('hex')
}

export function hashPassword(password: string) {
  return sha256(password + process.env.PASSWORD_SECRET)
}
