import React from 'react'

const App = () => {
  return (
   <>
    <form action="POST">
      <div>
      <label className='resize-both'>Enter your Binary Number<br></br></label>
      </div>
      <div>
      <textarea>Enter the number here!!</textarea>
      </div>
      <button value="Binary to Decimal" onClick={/*function */}>Perform Operation</button>
    </form>
   </>
  )
}

export default App