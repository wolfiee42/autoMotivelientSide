import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const Authprovide = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }






    const authinfo = { createUser, logInUser }
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