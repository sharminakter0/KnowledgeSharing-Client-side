import React from 'react';
import logo from "../../assets/Logo/ThinkTroveLogo.png"
import { Link } from 'react-router';

const KnowledgeLogo = () => {
    return (
       <Link to="/">
       <div className='flex items-center gap-2'>
        <img src={logo} alt="" className='size-5 md:size-7' />
                
                <p className='text-xl md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#0e68ee] to-[#2373eb] bg-clip-text text-transparent  transition-colors duration-300"'> ThinkTrove</p>
            </div>
        </Link>
    );
};

export default KnowledgeLogo;