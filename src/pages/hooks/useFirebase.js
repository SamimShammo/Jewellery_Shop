import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Login/Firebase/firebase.init';

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)


    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                const newUser = { email, displayName: name };
                saveUser(email, name, 'POST')
                setUser(newUser)
                setError('')
                history?.replace('/')
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .catch((error) => {
                setError(error.message)

            })

            .finally(() => setIsLoading(false));


    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                const destination = location?.state?.from || '/dashBoard';
                history?.replace(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }



    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/dashboard';
                history?.replace(destination);
                setError('')
            }).catch((error) => {
                setError(error.message)

            })
            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')

            } else {
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unSubscriber;
    }, [])
    useEffect(() => {
        fetch(`https://arcane-sierra-22755.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://arcane-sierra-22755.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setError('')

        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLoading(false));
    }
    return {
        admin,
        googleSignIn,
        user,
        error,
        logOut,
        registerUser,
        loginUser,
        isLoading,

    }
};

export default useFirebase;