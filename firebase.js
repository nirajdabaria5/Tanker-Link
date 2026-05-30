import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyD2lMAxuxbT8OECOwdooNKqahpz-YeYArA",

authDomain: "tankerlink.firebaseapp.com",

projectId: "tankerlink",

storageBucket: "tankerlink.firebasestorage.app",

messagingSenderId: "822879536062",

appId: "1:822879536062:web:d3e199c40b19d4e60e6fef"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
