import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const RegisterAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/register', body)
export const LoginAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/login', body)
