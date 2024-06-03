// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiQ3eYjbqrwStWch9KYgKRrNt54XjGtCM",
    authDomain: "store-tutorial-57aa6.firebaseapp.com",
    projectId: "store-tutorial-57aa6",
    storageBucket: "store-tutorial-57aa6.appspot.com",
    messagingSenderId: "822467082408",
    appId: "1:822467082408:web:fc2938b6489741de256a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();