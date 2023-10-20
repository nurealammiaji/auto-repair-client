import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            <br /><br />
            <button className="text-orange-600 btn btn-ghost">
                <span className="loading loading-spinner"></span>
                Loading
            </button>
            <br /><br /><br />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default Private;