

import { Navigate } from "react-router-dom";

export const  PrivateRoute = ({ children,isAuthenticated  }:any) => {




  return isAuthenticated ? children : <Navigate to="auth/login" />

}
