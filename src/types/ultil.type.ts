export interface SuccessResponse<Data> {
  data: Data
  message: string
}
export interface ErrorResponse<Data>{
  data?:Data
  messsage:string
}