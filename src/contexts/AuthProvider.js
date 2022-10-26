import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const popupSignIn = (provider) => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });
  const updateUserProfile = (profile) => {
    setLoading(false);
    return updateProfile(auth.currentUser, profile);
  };
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const authInfo = {
    user,
    popupSignIn,
    signIn,
    createUser,
    logOut,
    verifyEmail,
    updateUserProfile,
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
