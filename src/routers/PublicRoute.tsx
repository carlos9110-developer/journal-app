

import { Navigate } from "react-router-dom";

export const  PublicRoute = ({ children,isAuthenticated  }:any) => {


  return !isAuthenticated ? children : <Navigate to="/" />

}
