import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true);

    // This function stands for register user
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // This function stands for login user
    const signIn = ( email, password ) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // This function stands for logout user
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser( currentUser );
            setLoading(false);
            console.log("Auth State Change", currentUser);
        })
        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = { user, loading, createUser, signIn, logOut };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;