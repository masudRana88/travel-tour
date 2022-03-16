import React from "react";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword , signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebsae/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding] = useState(false);
    const provider = new GoogleAuthProvider();
    
    const auth = getAuth();
    //go back to your location

    // Login with google
    const singInWithGoogle = (goBack) => {
        setIsLoding(true)
        signInWithPopup(auth, provider)
        .then((result) => {
            const usr = result.user;
            setUser(usr)
        }).catch((error) => {
        
        })
            .finally(() => {
                setIsLoding(false)
                goBack()
            })
    }

    // Login with Email and Password
    const logInWithEmail = (email, password, goBack) => {
        setIsLoding(true)
        signInWithEmailAndPassword(auth, email , password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(() => {
                setIsLoding(false)
                goBack()
            })
        
    }
    // Create an account/ Sing Up
    const singUpWithEmail = (email, password, name, goBack) => {
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        }).finally(() => {
                setIsLoding(false)
                updateUserProfile(name)
                goBack()
            })
    }
    // Logout
    const logOut = () => {
        setIsLoding(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        // An error happened.
        }).finally(()=>setIsLoding(false))
    }

    // 
    const updateUserProfile = (name) => {
       updateProfile(auth.currentUser, {
           displayName: name
       }).then(() => {
            
        }).catch((error) => {
        // An error occurred
        // ...
        });
    }
    // Observe user state change
    useEffect(() => {
        setIsLoding(false)
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoding(false)
        })
        return () => unsubscribed;
    },[])


    return {singInWithGoogle,logInWithEmail,singUpWithEmail,user,logOut,isLoding}
}

export default useFirebase;