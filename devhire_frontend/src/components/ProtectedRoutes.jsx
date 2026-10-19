import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children, isLoggedIn}){

    const token = localStorage.getItem("token");

    if(!isLoggedIn) {
        return <Navigate to="/login" />
    }
    
    return children;
}