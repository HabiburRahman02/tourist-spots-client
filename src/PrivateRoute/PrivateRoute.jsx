import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="mt-6 max-w-24 mx-auto">
            <Audio
                height="80"
                width="40"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>

    }
    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;