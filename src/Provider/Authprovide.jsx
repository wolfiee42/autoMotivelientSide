import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const Authprovide = ({ children }) => {
    const authinfo = {}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider >
    );
};

Authprovide.propTypes = {
    children: PropTypes.object,
}

export default Authprovide;