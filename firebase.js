```js id="z4x8pm"
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";


// Firebase Config

const firebaseConfig = {

apiKey: "AIzaSyDF_91hizXxNK7LIJtvMmr0yhiTBOd-fhY",

authDomain: "tanker-link.firebaseapp.com",

projectId: "tanker-link",

storageBucket: "tanker-link.firebasestorage.app",

messagingSenderId: "27540547337",

appId: "1:27540547337:web:6fb7fb04710b820a4a15d8",

measurementId: "G-M4T0T8BVEP"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Authentication

const auth = getAuth(app);


// Firestore Database

const db = getFirestore(app);


// Export

export { auth, db };
```
