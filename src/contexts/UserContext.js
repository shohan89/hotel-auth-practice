import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [ user, setUser ] = useState({});

    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = { createUser };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;