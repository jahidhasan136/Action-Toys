import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { BallTriangle } from "react-loader-spinner";
import { useContext } from "react";

 

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    }
    if(!loader && user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;