import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w-full min-h-screen flex justify-center'>
    <div className='flex bg-[#fbfbfb] rounded-md h-3/4 w-1/3 justify-center my-4 bg-gradient-to-r from-cyan-500 to-blue-500 '>
    <div className='px-12 py-19'>
    <div className='tracking-wider pb-18 pt-13'>
        <h2 className='text-center p-8'>Login</h2>
    </div> 
  <form className="flex items-center" action="">
    <div className='align-left'>
      <label htmlFor="" className='flex'>Email address: </label>
      <input type="email" className='' />
      <div className='text-sm mb-2'>We will never share your email with anyone!</div>

      <label htmlFor="" className='flex pt-2'>Password: </label>
      <input type='checkbox' className=''/>
      <input type="password" className='flex' />
      <label className='px-1 text-sm'>check me out</label>
      <br/>
      <div className='flex justify-center'>
      <button type='button' className='bg-sky-200 px-2 m-12 rounded-xl hover:bg-amber-700'>Submit</button>
      </div>
    </div>
  </form>
    </div> 
    </div> 
    </div>
  </>
  )
}

export default Login