import React, { useContext } from 'react';

import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
// import DarkMode from './useTheme';
// import UseTheme from './useTheme';
import { ThemeToggle } from './ThemeToggle';
import KnowledgeLogo from './KnowledgeLogo/KnowledgeLogo';

const Header = () => {
   const {user,logout} = useContext(AuthContext);
  

    return (
      
      <>
        <div>
         <div className="navbar fixed top-0 left-0 w-full z-50  bg-blue-950 shadow-sm px-7 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <NavLink to="/">Home</NavLink>
        <NavLink to="/all-articles">All Articles</NavLink>
      {/* <NavLink to="/my-articles">My Articles</NavLink> 
     <NavLink to="/post-articles"> Post Articles</NavLink> */}

       <NavLink to="/about-us"> About Us</NavLink>
       <NavLink to="/term-use"> Terms of Use</NavLink>
       {user && (
       <NavLink 
    to="/dashboard" 
    className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:underline'}
  >
    Dashboard
  </NavLink>
     )}
        
      </ul>
    </div>
    <div className='flex text-center w-11/12 mx-auto gap-0'> <KnowledgeLogo></KnowledgeLogo>
    <h3 className=" font-semibold text-xl text-white"></h3></div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-white gap-4 ">
      <NavLink to="/" 
      className={({isActive})=>isActive ?'underline text-green-400':'hover:underline'}>Home</NavLink>
     <NavLink to="/all-articles"
     className={({isActive})=>isActive ?'underline text-green-400':'hover:underline'}>All Articles</NavLink>
     {/* <NavLink to="/my-articles"
     className={({isActive})=>isActive ?'underline text-green-400':'hover:underline'}>My Articles</NavLink> 
      <NavLink to="/post-articles"
      className={({isActive})=>isActive ?'underline text-green-400':'hover:underline'}> Post Articles</NavLink> */}

      {user && (
  <NavLink 
    to="/dashboard" 
    className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:underline'}
  >
    Dashboard
  </NavLink>
)}
      <NavLink className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:underline'} to="/about-us"> About Us</NavLink>
       <NavLink className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:underline'} to="/term-use"> Terms of Use</NavLink>
    </ul>
  </div>


  <div className="navbar-end ">
<div className='flex gap-4'>
          <ThemeToggle></ThemeToggle>
          {user?(
            <div className='flex items-center space-x-3'>
           
             <img src={user.photoURL} alt="user"
             className="w-11 h-11 border-green-400 border-2 rounded-full"
            //  hover={user.displayName}
            
             title={user.displayName ||'user'} /> 
             <button onClick={logout}
             className='btn 
              btn-info  btn-outline  '>Logout</button>
            </div>
          ):(
    
    <div className=''>
   <NavLink to="/auth/sign-in" className="btn btn-soft btn-info mr-6 ">Sign In</NavLink>
    {/* <NavLink to="/auth/sign-up" className="btn btn-soft btn-success ">Sign Up</NavLink> */}
    </div>

)}</div>

       

       </div>
 
    
</div>
        </div> 
        </>
    );
};

export default Header;