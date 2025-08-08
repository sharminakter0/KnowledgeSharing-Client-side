import React, { use} from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';


const PrivateRouter = ({children}) => {
  
 const location = useLocation()
    const {user,loading} =use(AuthContext)
    if (loading){
        return  " loading"
    }

    if(user && user?.email){

 return children
 
    }
    return <Navigate   state={location.pathname} to={'/auth/sign-in'} ></Navigate>

};

export default PrivateRouter;