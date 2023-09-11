import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [ user, setUser ] = useState({});

    // This function stands for register user
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // This function stands for login user
    const signIn = ( email, password ) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = { createUser, signIn };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;