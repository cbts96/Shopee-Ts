import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
// import { omit } from 'lodash'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { LoginAccount } from 'src/api/auth.api'
import Input from 'src/components/Input/Input'
import { getRules, schema, Schema } from 'src/utils/rules/Rules'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.pick(['email', 'password'])
const Login = () => {
  const {
    handleSubmit,
    getValues,

    register,
    // setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })
  const rules = getRules(getValues)
  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => LoginAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data, 'login mut')
      }
    })
  })
  return (
    <div className='bg-orange py-10'>
      <div
        className='bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: `url('https://cf.shopee.vn/file/sg-11134004-23010-qacwpnvb05lve3')` }}
      >
        <div className='mx-auto max-w-7xl px-4'>
          <div className='py-12:lg:py-32 grid grid-cols-1 lg:grid-cols-5 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
                <div className='rounded bg-white p-10 shadow-sm'>
                  <div className='text-2xl'>Đăng nhập</div>
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
                    <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
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
                    <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
                  </div>
                  <div className='mt-3'>
                    <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                      Đăng nhập
                    </button>
                  </div>
                  <div className='mt-8 flex items-center justify-center'>
                    <span className='mr-2 text-gray-400'> Ban chưa có tài khoản</span>
                    <Link className='text-red-400' to='/rigister'>
                      Quay về Đăng Ký
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
