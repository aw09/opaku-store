import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
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
    measurementId: "G-Z53H78Q4JV",
    databaseURL: "https://opaku-1b923-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(app);

