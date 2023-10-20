import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovide";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

PrivateRoute.propTypes  = {
    children: PropTypes.node
}

export default PrivateRoute;