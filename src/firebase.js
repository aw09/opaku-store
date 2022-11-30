import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// import {
//     API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET,
//     SENDER_ID, APP_ID, MESUREMENT_ID
// } from '$env/static/private'

const firebaseConfig = {
    apiKey: "AIzaSyCnEVCHDsE29Sryy8dUu5YhZMcchOWuJ-4",
    authDomain: "opaku-1b923.firebaseapp.com",
    projectId: "opaku-1b923",
    storageBucket: "opaku-1b923.appspot.com",
    messagingSenderId: "257332122135",
    appId: "1:257332122135:web:bb4acdb522cea5da53c252",
    measurementId: "G-Z53H78Q4JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

