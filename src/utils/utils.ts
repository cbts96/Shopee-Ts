import axios, { AxiosError, HttpStatusCode } from 'axios'

export function IsAxiosError<T>(error: unknown): error is AxiosError<T> {
  //eslint-disable-next-line
  return axios.isAxiosError(error)
}

export function IsAxiosUEError<FormError>(error: unknown): error is AxiosError<FormError>{
  return IsAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
