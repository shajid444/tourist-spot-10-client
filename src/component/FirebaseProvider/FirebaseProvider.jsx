
// context

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null)
// social auth provider
const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }





    // sign in user
    const signInUser = (email, password) => {
        // toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


        signInWithPopup(auth, googleProvider)
    }

    // github 
    const githubLogin = () => {
        toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


        signInWithPopup(auth, githubProvider)
    }

    // logout
    const logOut = () => {
        toast("SUCCESSFULLY LOGOUT");
        setUser(null)
        // setLoading(false);


        signOut(auth);
    }




    // observer
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);

            }
        });
        return () => unsubscribe();


    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loading,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;