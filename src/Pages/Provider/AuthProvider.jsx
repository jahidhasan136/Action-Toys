import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        createUser,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;