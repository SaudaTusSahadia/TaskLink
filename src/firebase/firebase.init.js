// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz17Mwxy-a1XeJp2bpVs9H5nXqVpVmPf0",
  authDomain: "tasklink-auth.firebaseapp.com",
  projectId: "tasklink-auth",
  storageBucket: "tasklink-auth.firebasestorage.app",
  messagingSenderId: "841558483863",
  appId: "1:841558483863:web:93e8e5f722607884d25ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export { app }