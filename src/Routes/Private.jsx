import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        <div className="text-center">
            <button className="btn">
                <span className="loading loading-spinner"></span>
                loading
            </button>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default Private;