import React, { useState } from 'react'
import InputField from '../components/InputField'

const Login = () => {
  const [data, setData] = useState({})
  return (
    <div className='flex flex-row w-screen h-screen justify-center items-center'>
      <div className='flex flex-col bg-white p-6 shadow-sm rounded-sm w-96'>
        <div className='flex flex-row text-2xl font-semibold'>Login</div>
        <InputField name={"email"} error={"Please enter a valid email address"} placeholder="ex. john@xyz.com" label="Email" type={"email"} onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
        <InputField name={"password"} placeholder="" label="Password" type={"password"} onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
        <div className='flex flex-row'>
          <button className='bg-blue-700 text-white w-full h-11 rounded-md text-lg mt-4' onClick={() => { console.log(data) }}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login