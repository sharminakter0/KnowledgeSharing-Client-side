
import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import SignIn from "../Pages/LoginPage/SignIn";
import SignUp from "../Pages/RegisterPage/SignUp";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import PostArticles from "../Pages/PostArticles";
import Allarticles from "../Pages/Allarticles";
import ArticleCardDetails from "./ArticleCardDetails";
import PrivateRouter from '../Provider/PrivateRouter'

import CategoriesPage from "../Pages/CategoriesPage";
import MyArticles from "../Pages/MyArticles";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    { 
      index:true, 
      loader:()=>fetch('https://knowledege-project.vercel.app/articles'),
      Component:Home

    } ,
     {
      path:"/post-articles",
      element: <PrivateRouter>
        <PostArticles></PostArticles>
      </PrivateRouter>
    },
    {
      path:"/all-articles",
      loader:()=>fetch("https://knowledege-project.vercel.app/articles"),
      element:<Allarticles></Allarticles>
    },
   {
    path:"/article-details/:id",
    element:<ArticleCardDetails></ArticleCardDetails>
   },

   {
    path:"/categorys/:category",
    element:<CategoriesPage></CategoriesPage>,
    loader:({params})=>fetch(`https://knowledege-project.vercel.app/articles?category=${params.category}`)
   }
    ,
    {
      path:"/my-articles",
      element:<PrivateRouter>
        <MyArticles></MyArticles>
      </PrivateRouter>
    },
    {

      path:"/about-us",
      element:<AboutUs></AboutUs>
    }



  
  ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
  
  ,

  {
    path:"/auth",
    Component:AuthLayout,
    children:[
      {
       path:"/auth/sign-in",
       element:<SignIn></SignIn>
      },
      {
        path:"/auth/sign-up",
        element:<SignUp></SignUp>
      }
    ]
  }
]);

export default router;