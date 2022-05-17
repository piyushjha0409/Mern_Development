import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex bg-[#fbfbfb] rounded-md shadow-amber-700 h-3/4 w-96'>
    <div className='px-12 py-19'>
    <div className='tracking-wider pb-18 pt-13'>
        <h2 className='text-center p-8'>Login</h2>
    </div> 
  <form action="">
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
  </>
  )
}

export default Login