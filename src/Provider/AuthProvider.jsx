import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState(null);
    const [bookings, setBookings] = useState(null);
    const [user, setUser] = useState(null);

    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    // User Loading
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    // Services Loading
    useEffect(() => {
        fetch('https://auto-repair-server.vercel.app/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // Bookings Loading
    const url = `https://auto-repair-server.vercel.app/bookings?uid=${user?.uid}`;

    useEffect(() => {
        if (user) {
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    })

    // JWT Adding
    useEffect(() => {
        if (user !== null) {
            const loggedUser = {uid: user.uid};
            console.log(loggedUser);
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('JWT Token:', data.token);
                localStorage.setItem('autorepair-user-token', data.token);
            })
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        services,
        bookings,
        emailRegister,
        emailLogin,
        googleLogin,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;