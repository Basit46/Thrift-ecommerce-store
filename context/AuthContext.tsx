"use client";

import React, { useState, createContext, useContext } from "react";
import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserDetailsType } from "@/types";

const AuthContext = createContext({} as AuthContextType);

type AuthContextType = {
  userDetails: UserDetailsType;
  handleSignIn: () => void;
};

const provider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    uid: null,
    name: null,
    email: null,
    photoURL: null,
  });
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
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <AuthContext.Provider value={{ handleSignIn, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
