import React, { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    console.log(location);
    const {user,loding}=useContext(AuthContext)
    if(loding){
      return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate> ;
};

export default PrivateRoute;