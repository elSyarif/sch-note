import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row justify-center items-center'>
    <div className='border-2 border-gray-100 shadow-md rounded-lg py-5 px-7 flex flex-col gap-4 w-[430px]'>
      <div className='inline-block space-y-1 text-center'>
        <div className='text-4xl font-semibold'>Daftar</div>
        <div className='text-md font-light'>makse greate feature</div>
      </div>
      <form className='flex flex-col gap-5' action="" autoComplete='off'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-base text-gray-800'>Name</label>
            <input type="text" id='name' name='name' className='form-input rounded-lg focus:border-success focus:ring-success'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-base text-gray-800'>Email</label>
            <input type="text" id='email' name='email' className='form-input rounded-lg focus:border-success focus:ring-success'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='text-base text-gray-800'>Password</label>
            <input type="password" id='password' name='password' className='form-input rounded-lg focus:border-success focus:ring-success'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='confirm-password' className='text-base text-gray-800'>Confirm Password</label>
            <input type="password" id='confirm-password' name='confirm-password' className='form-input rounded-lg focus:border-success focus:ring-success'/>
          </div>
          <div>
            <button className='btn btn-success text-white capitalize hover:bg-green-700 w-full'>Login</button>
          </div>
          <div>
            Sudah Punya akun <Link className='text-green-500 font-semibold' to="/login">Masuk disini</Link>
          </div>
        </form>
    </div>
  </div>
  )
}

export default Register