import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className='bg-dark text-light shadow-lg py-2'>

      <div className='inline mx-7 '>
        {/* This will be the logo of the app  */}
        <div className='inline decoration-wavy'>
          <a className='hover:no-underline'>TodoList</a>
        </div>
      </div>

      <div className='inline space-x-4'>
        {/* Primary Componenents of the navbar  */}
        <div className='inline'>
          <a className='hover:no-underline' href="/">Home</a>
        </div>

        <div className='inline'>
          <a className='hover:no-underline' href="/about">About</a>
        </div>
      </div>
    </nav>
  )
}

{/* Props*/ }
Navbar.defaultProps = {
  title: "This is your default title",
  searchbar: true
}
Navbar.propType = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}