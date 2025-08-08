import React from 'react';
import { Link } from 'react-router';
import errorlottie from "../../assets/lottie/error.json"
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className='text-center my-40'>
         <Lottie
      animationData={errorlottie}
     loop={true}
     className="w-72 md:w-96 mx-auto  gap-0">
           
            
            </Lottie>   
       
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-success">Back to Home</Link>    
        </div>
    );
};

export default ErrorPage;