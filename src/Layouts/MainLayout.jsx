import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer'
import { Outlet } from 'react-router';
import Home from '../Pages/Home';

const MainLayout = () => {
    return (
        <div>
        <Header></Header>
        
        <Outlet>
          <Home></Home>
        </Outlet>
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;