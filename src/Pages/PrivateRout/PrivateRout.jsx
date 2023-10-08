import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="text-center text-blue-600">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" />
};

export default PrivateRout;