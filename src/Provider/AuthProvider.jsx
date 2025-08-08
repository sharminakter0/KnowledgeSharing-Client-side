import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // Google login
  const gLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
 // console.log('hi')

  // Watch Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        currentUser.getIdToken()
          .then((idToken) => {
            localStorage.setItem('access-token', idToken);
            setToken(idToken);
            console.log('✅ Firebase token fetched:', token);
          })
          .catch((err) => {
            console.error('❌ Failed to get token:', err);
            setToken(null);
          });
      } else {
        localStorage.removeItem('access-token');
        setToken(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Optional debug log for token
  useEffect(() => {
    console.log('🔁 Token state changed:', token);
  }, [token]);

  const authData = {
    createUser,
    user,
    setUser,
    logout,
    login,
    updateUser,
    loading,
    setLoading,
    gLogin,
    token,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
