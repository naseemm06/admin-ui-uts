import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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
export const db = getFirestore(app);
export const storage = getStorage(app);