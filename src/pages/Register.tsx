import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input/Input'
import { getRules, Schema, schema } from '../utils/rules/Rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { RegisterAccount } from 'src/api/auth.api'
import omit from 'lodash/omit'
import { IsAxiosUEError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/ultil.type'
import { AppContext } from 'src/context/app.context'
import Button from 'src/components/Button'
// import { type } from 'os'

type FormData = Schema
// type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
// const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
const Register = () => {
  const {setIsAuth}=useContext(AppContext)
  const navigate=useNavigate()
  // const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
  const {
    handleSubmit,
    getValues,
    register,
    // watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const rules = getRules(getValues)
  const registerMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => RegisterAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    console.log('adasdasdasd')
    const body = omit(data, ['confirm_password'])
    registerMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuth(true)
        navigate("/")
      },
      onError: (error) => {
        if (IsAxiosUEError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const FormError = error.response?.data.data
          if (FormError) {
            Object.keys(FormError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: FormError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  // const value = watch()
  // console.log(value)
  return (
    <div className='bg-orange py-10'>
      <div
        className='bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: `url('https://cf.shopee.vn/file/sg-11134004-23010-qacwpnvb05lve3')` }}
      >
        <div className='py-12:lg:py-32 grid grid-cols-1 lg:grid-cols-5 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <Input
                  rules={rules.email}
                  errorMessage={errors.email?.message}
                  register={register}
                  placeholder='Email'
                  type='email'
                  name='email'
                  autoComplete='on'
                  className='mt-8'
                />
              </div>
              <div className='mt-3'>
                <Input
                  errorMessage={errors.password?.message}
                  type='password'
                  name='password'
                  autoComplete='on'
                  rules={rules.password}
                  register={register}
                  className='mt-8'
                  placeholder='Password'
                />
              </div>
              <div className='mt-3'>
                <Input
                  type='password'
                  name='confirm_password'
                  errorMessage={errors.confirm_password?.message}
                  register={register}
                  className='mt-8'
                  placeholder='Confirm Password'
                  autoComplete='on'
                  rules={rules.confirm_password}
                />
              </div>
              <div className='mt-3'>
                <Button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='mr-2 text-gray-400'> Bạn đã có tài khoản</span>
                <Link className='text-red-400' to='/login'>
                  Quay về Đăng Nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
