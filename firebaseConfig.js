import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIicEC7DcSUU70cOGb59oQ6d89otBj57o",
  authDomain: "thrift-store-64bb4.firebaseapp.com",
  projectId: "thrift-store-64bb4",
  storageBucket: "thrift-store-64bb4.appspot.com",
  messagingSenderId: "819965336405",
  appId: "1:819965336405:web:567b058b7e10864490addc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
