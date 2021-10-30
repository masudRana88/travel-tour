import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebsae/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding] = useState(true);
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    // Login with google
    const singInWithGoogle = () => {
        setIsLoding(true)
        signInWithPopup(auth, provider)
        .then((result) => {
            const usr = result.user;
            console.log(usr)
            setUser(usr)
        }).catch((error) => {
        
        })
        .finally(()=>setIsLoding(false))
    }

    // Logout
    const logOut = () => {
        setIsLoding(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        // An error happened.
        }).finally(()=>setIsLoding(false))
    }

    // Observe user state change
    useEffect(() => {
        setIsLoding(true)
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


    return {singInWithGoogle,user,logOut,isLoding}
}

export default useFirebase;