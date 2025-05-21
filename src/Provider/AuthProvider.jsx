import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import {app} from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
const provider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    const createUser = ( email, password ) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,provider);
        
    }

    const resetUser=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        signInWithGoogle,
        resetUser
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;