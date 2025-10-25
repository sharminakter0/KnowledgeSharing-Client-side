import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import { Outlet } from 'react-router';
import Home from '../Pages/Home';
import ThemeToggle from '../Component/ThemeToggle';

const MainLayout = () => {
    return (
        <div className='bg-base-200'>
        <Header></Header>
        
        <Outlet>
          <Home></Home>
        </Outlet>
        <Footer></Footer>

        <ThemeToggle/>
        </div>
    );
};

export default MainLayout;