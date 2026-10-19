import { Navigate } from "react-router-dom";

export default function GuestRoutes({children, isLoggedIn}){ 
    if(isLoggedIn){
        return <Navigate to="/dashboard" />
    }
    return children;
}