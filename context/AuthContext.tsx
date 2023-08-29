"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { UserDetailsType } from "@/types";
import { toast } from "react-toastify";

const AuthContext = createContext({} as AuthContextType);

type AuthContextType = {
  userDetails: UserDetailsType;
  handleSignIn: () => void;
  handleSignOut: () => void;
};

const provider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    uid: null,
    name: null,
    email: null,
    photoURL: null,
  });

  //useEffect to handle user session changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUserDetails({
          uid: null,
          name: null,
          email: null,
          photoURL: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Sign in with google
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserDetails({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        toast("Sign Successful!");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  //Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast("Sign Out Successful!");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
  return (
    <AuthContext.Provider value={{ userDetails, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
