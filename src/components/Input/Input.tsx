import type {UseFormRegister, RegisterOptions} from "react-hook-form"

interface Props{
  type:React.HTMLInputTypeAttribute,
  register: UseFormRegister<any>,
  className?: string,
  placeholder?:string,
  name:string,
  errorMessage?:string,
  rules?: RegisterOptions,
  autoComplete:string
}

const Input = ({autoComplete,rules,type,register,className,placeholder,name,errorMessage}:Props) => {
  return (
    <div className={className}>
    <input
                      type={type}
                      {...register(name, rules)}
                      className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"                      placeholder={placeholder}
                      autoComplete={autoComplete}
                    />
                    <div className='mt-1 min-h-[1rem] text-sm text-red-600'>{errorMessage}</div>
  </div>
  )
}

export default Input