import React from 'react'
import { BiLogIn, BiSearchAlt } from "react-icons/bi";
import { BsPersonPlus, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='bg-slate-800 text-white text-2xl'>
        <nav className='md:grid grid-cols-4'>
          <h1 className='col-span-1 text-center hover:font-bold cursor-pointer flex items-center justify-center'>Kathford Store</h1>
          <div className='col-span-2 flex items-center px-5 py-2'>
            <input type="search" className='bg-slate-200 border-0 outline-0 text-slate-700 px-2 h-full w-full rounded-l-md' />
            <button className='bg-slate-500 h-full p-2 rounded-r-md hover:bg-slate-400 active:bg-slate-600'> 
              <BiSearchAlt />
            </button>
          </div>
          <div className='col-span-1 flex items-center
          justify-evenly'>
            <Link to={'/login'}>
              <BiLogIn/>
            </Link>
            <Link to={'/register'}>
              <BsPersonPlus/>
            </Link>
            <Link to={'/cart'}>
              <BsCart/>
            </Link>
          </div>
        </nav>
        <menu className='flex justify-evenly py-2'>
          <Link to={'/'}>
            <li className='hover:underline hover:font-bold text-xl cursor-pointer'>HOME</li>
          </Link>
          <Link to={'/about'}>
            <li className='hover:underline hover:font-bold text-xl cursor-pointer'>ABOUT</li>
          </Link>
          <Link to={'/products'}>
            <li className='hover:underline hover:font-bold text-xl cursor-pointer'>PRODUCTS</li>
          </Link>
          <Link to={'/services'}>
            <li className='hover:underline hover:font-bold text-xl cursor-pointer'>SERVICES</li>
          </Link>
          <Link to={'/blog'}>
            <li className='hover:underline hover:font-bold text-xl cursor-pointer'>BLOG</li>
          </Link>
          <Link to={'/contact'}>
            <li className='hover:underline hover:font-bold text-xl cursor-pointer'>CONTACT</li>
          </Link>
        </menu>
      </header>
    </>
  );
}

export default Header