import React from 'react';
import Banner from '../Component/Banner';
import { Link, useLoaderData } from 'react-router';
import FeaturedArticles from '../Component/FeaturedArticles';
import Categories from '../Component/Categories';
import ExtraSection1 from '../Component/ExtraSection1';

 


const Home = () => {
    const articles = useLoaderData();
 
   
    return (
       <>
       <Banner/>
       

       <FeaturedArticles articles={articles}></FeaturedArticles>


       <Categories></Categories>

       <ExtraSection1></ExtraSection1>
       
       
       


       </>
    );
};

export default Home;