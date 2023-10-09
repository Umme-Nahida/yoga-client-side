import {GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword , getAuth, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./_firebase.confic";


 export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    // create user sign up
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // create sign in
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //google sign in
    const signInWithGoogle = ()=>{
        setLoading(true)
             signInWithPopup(auth,provider)
             .then(result =>{
                console.log(result.user)
             })
             .catch(error=>{
                console.log(error)
             })
       }

    // log out method
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {user,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
        loading
    }

    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('tmi j kanei jaw kno ami cc camera diye sob dekci',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {unSubscribe()};
    },[])


    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;