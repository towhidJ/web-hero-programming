import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firbase.initialize";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = "Bn";

const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleGoogleAuthLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };

    const userRegisterWithPassword = (e, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {})
            .catch((error) => {
                console.log(error.message);
            });
        e.preventDefault();
    };

    return {
        logout,
        handleGoogleAuthLogin,
        userRegisterWithPassword,
        user,
    };
};

export default useFirebase;
