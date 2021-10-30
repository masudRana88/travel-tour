import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebsae/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({}) 
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    // Login with google
    const singInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const usr = result.user;
            console.log(usr)
            setUser(usr)
        }).catch((error) => {
        
         });
    }

    // Logout
    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
    }

    // Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribed;
    },[])


    return {singInWithGoogle,user,logOut}
}

export default useFirebase;