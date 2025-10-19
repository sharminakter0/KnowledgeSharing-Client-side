
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
import DashboardLayout from "./Dashboard/DashboardLayout";
import TermsOfUse from "./TermofUse/TermofUse";
import MyProfile from "./MyProfile/MyProfile";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";


const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    { 
      index:true, 
      loader:()=>fetch('http://localhost:5000/articles'),
      Component:Home

    } ,
     
    {
      path:"/all-articles",
      loader:()=>fetch("http://localhost:5000/articles"),
      element:<Allarticles></Allarticles>
    },
   {
    path:"/article-details/:id",
    element:<ArticleCardDetails></ArticleCardDetails>
   },

   {
    path:"/categorys/:category",
    element:<CategoriesPage></CategoriesPage>,
    loader:({params})=>fetch(`http://localhost:5000/articles?category=${params.category}`)
   }
    ,
  
    {

      path:"/about-us",
      element:<AboutUs></AboutUs>
    },
    {
      path:"/term-use",
      element:<TermsOfUse></TermsOfUse>
    },
    {
      path:"/privacy",
      element:<PrivacyPolicy></PrivacyPolicy>
    },
    



  
  ]


  },

  {
      path:"/dashboard",
      element:<PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
      children:[
         {
        index:true,
        element:<MyProfile></MyProfile>
      },
       {
      path:"/dashboard/post-articles",
      element:<PostArticles></PostArticles>
      },
       {
      path:"/dashboard/my-articles",
      element:<MyArticles></MyArticles>

    },
    {
      path:"/dashboard/my-profile",
      element:<MyProfile></MyProfile>
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