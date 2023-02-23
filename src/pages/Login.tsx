import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-orange py-10'>
      <div className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12:lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <div className="p-10 rounded bg-white shadow-sm">
              <div className="text-2xl">Đăng nhập</div>
              <div className="mt-8">
                <input type="email" name='email '  className='p-3 w-full outline-none border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='email'/>
                <div className="mt-1 text-red-600 min-h-[1rem] text-sm"></div>
              </div>
              <div className="mt-3">
                <input type="password" name='password'  className='p-3 w-full outline-none border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm' placeholder='password'/>
                <div className="mt-1 text-red-600 min-h-[1rem] text-sm"></div>

              </div>
              <div className="mt-3">
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className="flex items-center justify-center mt-8">
                <span className='text-gray-400 mr-2'> Ban chưa có tài khoản</span>
                <Link className="text-red-400" to="/rigister">
                  Quay về Đăng Ký
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login