import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signInUser = (email ,password) =>{
        return signInWithEmailAndPassword(auth , email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Current value of the current user', currentUser);
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])
  
    const info = {user ,createUser, signInUser , logOut};

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;