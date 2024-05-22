import React, { useState, useEffect, useContext, createContext } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signOut as authSignOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { firebaseApp } from "../utils/firebase";

// Initialize Firebase auth
const auth = getAuth(firebaseApp);

// Create a `useAuth` hook and `AuthProvider` that enables
// any component to subscribe to auth and re-render when it changes.
const authContext = createContext();
export const useAuth = () => useContext(authContext);
// This should wrap the app in `src/pages/_app.js`
export function AuthProvider({ children }) {
  // Store auth user in state
  // `user` will be object, `null` (loading) or `false` (logged out)
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    console.log("Attempting to sign in with email:", email);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log("Sign-in successful", userCredential.user);
        return true; // Indicate success
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        return false; // Indicate failure
      });
  };

  const signinWithProvider = async (name) => {
    try {
      const provider = authProviders.find((p) => p.name === name).get();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Ensure user object is updated
      return true; // Indicate success
    } catch (error) {
      console.error("Error signing in with provider:", error);
      return false; // Indicate failure
    }
  };

  const signout = () => {
    return authSignOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // This should include all user properties, including photoURL
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let abortController = new AbortController();
    console.log("USER", user);
    return () => {
      abortController.abort();
    };
  }, [user]);

  const value = {
    user,
    signin,
    signinWithProvider,
    signout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

const authProviders = [
  {
    id: "password",
    name: "password",
  },
  {
    id: "google.com",
    name: "google",
    get: () => new GoogleAuthProvider(),
  },
];
