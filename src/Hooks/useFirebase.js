import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Register
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to the database
            saveUser(email, name, 'POST');
            //send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
            history.replace('/');
            setAuthError('');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setAuthError(errorMessage);
        })
        .finally(()=> setIsLoading(false))
    };

    // Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setAuthError(errorMessage);
        })
        .finally(()=> setIsLoading(false))

    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch( error => {
            //
        })
        .finally(()=> setIsLoading(false));
    }

    // Google Sign In
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            saveUser(user.email, user.displayName, 'PUT')
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch(error => {
            setAuthError(error.message);
        })
        .finally(()=> {setIsLoading(false)})
    }

    //Observe User State
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return ()=> unsubscribed;
    }, [])

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers:{'content-type':'application/json'},
            body: JSON.stringify(user),
        })
        .then(res => {

        })
    }

    // admin true or false
    useEffect(()=> {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        isLoading,
        authError
    }
}
export default useFirebase;