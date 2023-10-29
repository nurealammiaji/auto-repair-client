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

    // User Loading and JWT Adding
    useEffect(() => {
        // User Loading
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            setUser(currentUser);
            // JWT Adding
            const loggedUser = {uid: currentUser?.uid};
            fetch('https://auto-repair-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('autoRepair-user-token', data.token);
                })
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    })

    // Services Loading
    useEffect(() => {
        fetch('https://auto-repair-server.vercel.app/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    // Bookings Loading
    useEffect(() => {
        if (user) {
            fetch(`https://auto-repair-server.vercel.app/bookings?uid=${user?.uid}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('autoRepair-user-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setBookings(data);
                })
        }
    })

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