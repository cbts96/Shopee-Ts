type Role = 'admin' | 'user'

export interface User {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
  role: Role
  phone: string
  address: string
  email: string
  dateOfBirth: null
}
