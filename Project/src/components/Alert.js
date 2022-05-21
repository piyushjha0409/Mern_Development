import React from 'react'

const Alert = (props) => {
  return (
    <div>
     <div className='bg-gradient-to-r from-red-700 to-orange-200'>
         {props.message}
     </div>
    </div>
  )
}

export default Alert