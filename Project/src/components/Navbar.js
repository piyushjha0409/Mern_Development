import React, {useEffect} from 'react' 
import Logo from '../static/download.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();

  useEffect(() =>{
    console.log(location.pathname);
  }, [location]);
  
  return (
    <>
      <header className='box-border m-0 p-0 font-bold font-xs font-poppins bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <nav className='flex justify-between items-center'>
            <img className="h-14 m-1 p-1 border-none rounded-xl" src={Logo} alt="logo" />
          <ul className='inline'>
            <li className={`inline ml-12 px-6 hover:text-amber-200 ${location.pathname === '/'? 'text-violet-700':''}`}><a href={'/'}>Home</a></li>
            <li className={`inline ml-12 px-6 hover:text-amber-200 ${location.pathname ==='/about'? 'text-violet-700':''}`}><a href={'/about'}>About</a></li>
          </ul>
        <div className="text-lime-50">
        <button className='px-2 bg-amber-200 m-2 rounded-xl text-black hover:bg-black hover:text-white'><a href="/login">Login</a></button>
        <button className='px-2 bg-amber-200 hover:bg-black text-black hover:text-white m-1 rounded-xl ' ><a href='#'>SignUp</a></button>
        </div>
        </nav>
      </header>
    </>
  )
}
export default Navbar