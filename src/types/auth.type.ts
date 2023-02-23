import { ResponseApi } from './ultil.type'
import { User } from './user.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  user: User
  expires: string
}>
