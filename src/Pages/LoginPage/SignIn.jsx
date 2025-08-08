import React, {  useState,useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';


import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

import { motion } from 'framer-motion';





const SignIn = () => {

    const location = useLocation()
    const navigate = useNavigate()
     const {login,gLogin} =useContext(AuthContext)
     const [email,setEmail] =useState('')


     // login for email and pass

     const handleLogin =(e)=>{
        e.preventDefault();
        const target = e.target
        const email =target.email.value
        const password=target.password.value
        // .log(password,email)

        login(email,password)
        .then((result)=>{
          const user = result.user
          console.log (user)

          Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Login successful!',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
          navigate(`${location.state ? location.state : '/'}`)
        })
        .catch ((err)=>{

            const errorMessage = err.message;
         
            alert(errorMessage)
        })

     }
//   handle google log in
const handleGooleLogin =()=>{
    gLogin()
    .then((result)=>{
       Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Logged in with Google!',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
        navigate(`${location.state ? location.state : '/'}`)
 console.log(result)
    })
    .catch((err)=>{
        const errorMessage = err.message;
         
        alert(errorMessage)
    })
    
}

     
    return (
        <div className='mt-10'>

             <h1 className=' text-center mt-10 font-bold text-4xl  text-blue-950 '><motion.span 
      animate={
        {
            color:['#65ff33','#f633ff','#334fff','#bf33ff','#33f4ff','#ff3353'],
       transition:{duration:7,repeat:Infinity} 

      }}
    >ThinkTrove</motion.span> Sign In</h1>
        <form onSubmit={handleLogin} className=''>
             <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-opacity-10 border-white  mx-auto my-10 ">
  <div className="card-body p-8">
    <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-[#33ffa7]">
     Sign In Your Account
    </h2>
    
    
    <fieldset className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <input 
          type="email" 
          className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
          placeholder="Enter your Email"
          name='email' 
        />
      </div>
      
      <div className="form-control">
        <div className="flex justify-between items-center">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
         
          <Link to={`/auth/forgot-password?email=${encodeURIComponent(email)}`} className="label-text-alt link link-hover text-xs "
          onBlur={(e)=>setEmail(e.target.value)}>Forgot password?</Link>
        </div>
        
        <input 
          type="password" 
          className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
          placeholder="••••••••" 
          name='password'
        />
      </div>
     
      
      <button  type='submit' className="btn btn-success w-full mt-6 hover:scale-[1.01] active:scale-[0.99] transition-transform">
       Sign In
      
      </button>
    </fieldset>
    
    <div className="divider my-6">OR</div>
    
    <div className="flex gap-4 justify-center ">
      <button onClick={ handleGooleLogin} className="btn btn-active  hover:bg-base-200 transition-colors px-45">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </button>
    
      
    </div>
    
    <p className="text-center text-sm mt-6">
      Don't have an account? <Link to={"/auth/sign-up"} className='link text-[#33ffa7]  font-medium'> Sign Up </Link>
    </p>
  </div>
</div>
        </form></div>
    );
};

export default SignIn;