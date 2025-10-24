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
import axios from 'axios';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // Role: 'admin', 'user', 'verified-user'
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // -------------------------
  // Auth functions
  // -------------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const gLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = async (displayName, photoURL, ) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName, photoURL });
    // Optional: save `bio` to Firestore if you store additional user data
  }
};

  // -------------------------
  // Helper: Save user to MongoDB
  // -------------------------
  const saveUserToDB = async (currentUser) => {
    if (!currentUser?.email) return;

    const userData = {
      name: currentUser.displayName || 'Anonymous',
      email: currentUser.email,
      role: 'user', // default role
    };

    try {
      await axios.post('http://localhost:5000/users', userData);
      console.log('✅ User saved to DB');
    } catch (err) {
      console.error('❌ Failed to save user:', err);
    }
  };

  // -------------------------
  // Watch Firebase auth state
  // -------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          // Get Firebase ID token
          const idToken = await currentUser.getIdToken();
          localStorage.setItem('access-token', idToken);
          setToken(idToken);

          // Save user to MongoDB (if not exists)
          await saveUserToDB(currentUser);

          // Fetch role from backend
          const res = await axios.get(
            `http://localhost:5000/users/${currentUser.email}`
          );
          setRole(res.data?.role || 'user'); // fallback role
          console.log('✅ Role fetched:', res.data?.role);
        } catch (err) {
          console.error('❌ Error fetching token or role:', err);
          setToken(null);
          setRole('user');
        }
      } else {
        localStorage.removeItem('access-token');
        setToken(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // -------------------------
  // Debug logs
  // -------------------------
  useEffect(() => console.log('🔁 Token changed:', token), [token]);
  useEffect(() => console.log('🧩 Role changed:', role), [role]);

  // -------------------------
  // Context value
  // -------------------------
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
    role,
    updateUserProfile, // use this for role-based access
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;