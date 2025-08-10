import React from 'react';
import Banner from '../Component/Banner';
import { Link, useLoaderData } from 'react-router';
import FeaturedArticles from '../Component/FeaturedArticles';
import Categories from '../Component/Categories';
import ExtraSection1 from '../Component/ExtraSection1';
import ReviewSection from '../Component/ReviewSection/ReviewSection';
import HowThinkTroveWorks from '../Component/HowThinkTroveWorks/HowThinkTroveWorks';

 


const Home = () => {
    const articles = useLoaderData();
 
   
    return (
       <>
       <Banner/>
       

       <FeaturedArticles articles={articles}></FeaturedArticles>


       <Categories></Categories>

       <HowThinkTroveWorks></HowThinkTroveWorks>

       <ExtraSection1></ExtraSection1>

       <ReviewSection></ReviewSection>
       
       
       


       </>
    );
};

export default Home;