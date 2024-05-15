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

import { redirect } from "react-router-dom";

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
    console.log("Made it here!");
    return signInWithEmailAndPassword(auth, email, password).then(setUser);
  };

  const signinWithProvider = (name) => {
    // Get provider by name ("google", "facebook", etc)
    const provider = authProviders.find((p) => p.name === name).get();
    return signInWithPopup(auth, provider).then(setUser);
  };

  const signout = () => {
    return authSignOut(auth);
  };

  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Unsubscribe on cleanup
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

// A Higher Order Component for requiring authentication
export const requireAuth = (Component) => {
  return function RequireAuthHOC(props) {
    // Get authenticated user
    const auth = useAuth();

    useEffect(() => {
      // Redirect if not signed in
      if (auth.user === false) {
        return redirect("/auth/signin");
      }
    }, [auth]);

    // Show loading indicator
    // We're either loading (user is `null`) or about to redirect from above `useEffect` (user is `false`)
    if (!auth.user) {
      return <h1>LOADING!</h1>; //<PageLoader />;
    }

    // Render component now that we have user
    return <Component {...props} />;
  };
};

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
