import React from 'react';
import logo from "../../assets/lottie/cENfIyCPDD.json"
import { Link } from 'react-router';
import Lottie from 'lottie-react';
const KnowledgeLogo = () => {
    return (
       <Link to="/">
       <div className='flex items-center'>
               
                     <Lottie
     animationData={logo}
     loop={true}
     className="w-8 md:w-8 mx-auto  gap-0">
      

     </Lottie>
                
                <p className='text-2xl -ml-1  font-bold text-green-400'> ThinkTrove</p>
            </div>
        </Link>
    );
};

export default KnowledgeLogo;