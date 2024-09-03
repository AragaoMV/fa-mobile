import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDBXIWCz-swyMfEUP0WP8kn2m8q2hue5o4",
    authDomain: "fa-mobile-5f33e.firebaseapp.com",
    databaseURL: "https://fa-mobile-5f33e-default-rtdb.firebaseio.com",
    projectId: "fa-mobile-5f33e",
    storageBucket: "fa-mobile-5f33e.appspot.com",
    messagingSenderId: "279910881732",
    appId: "1:279910881732:web:6eda610f80a8af0513ec91",
    measurementId: "G-EYS71CVHNY"
};

if (firebase.apps.length ===0) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export {db}