import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4tofB0Cb64vWVXfEVwHcag9VSJZGkts",
  authDomain: "otp-verification-6d183.firebaseapp.com",
  projectId: "otp-verification-6d183",
  storageBucket: "otp-verification-6d183.appspot.com",
  messagingSenderId: "1054402098492",
  appId: "1:1054402098492:web:0e6adf4401a1798b041a39",
  measurementId: "G-VNYV2QE4P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);