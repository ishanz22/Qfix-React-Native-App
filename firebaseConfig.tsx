import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/database";

// import {...} from "firebase/functions";
// import {...} from "firebase/storage";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4cAfdE8ghMXvUKV_n7L5HgjxCaaUDiEE",
    authDomain: "qfixs-db82f.firebaseapp.com",
    databaseURL: "https://qfixs-db82f-default-rtdb.firebaseio.com",
    projectId: "qfixs-db82f",
    storageBucket: "qfixs-db82f.appspot.com",
    messagingSenderId: "971826196808",
    appId: "1:971826196808:web:ae12dba1c7d036d180c37d",
    measurementId: "G-8LSCFMZ6GX"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
