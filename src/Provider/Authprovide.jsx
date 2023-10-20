import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const Authprovide = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setloading] = useState({})
    const provider = new GoogleAuthProvider;

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
    const logInByGoogle = () => {
        setloading(true);
        return signInWithPopup(auth, provider)
    }
    const updateUser = (name, photo) => {
        setloading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('spying: ', currentUser);
            setloading(false)
        })
        return () => {
            unsubscibe()
        }
    })
    const authinfo = { user, createUser, logInByGoogle, logInUser, updateUser, loading, setloading, logOut }
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