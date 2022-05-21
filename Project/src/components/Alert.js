import React from 'react'

const Alert = (props) => {
  return (
    <div>
     <div className='bg-[#eddcd9] text-black p-2'>
         {props.message}
     </div>
    </div>
  )
}

export default Alert