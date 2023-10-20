import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const Authprovide = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setloading] = useState({})

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('spying: ', currentUser);
        })
        return () => {
            unsubscibe()
        }
    })
    const authinfo = { user, createUser, logInUser, loading, setloading, logOut }
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