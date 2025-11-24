// src/firebase.js

// 1. Imports (From the YouTuber)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// 2. Configuration (From Firebase - YOUR Real Keys)
const firebaseConfig = {
  apiKey: "AIzaSyAAAz4jndEDpNzpMULDK8gfu1eo9rvQfUY",
  authDomain: "my-awesome-project-bfac2.firebaseapp.com",
  projectId: "my-awesome-project-bfac2",
  storageBucket: "my-awesome-project-bfac2.firebasestorage.app",
  messagingSenderId: "447082739314",
  appId: "1:447082739314:web:5c605ee5f42d3efcbc74eb"
};

// 3. Initialization (From the YouTuber)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 4. Exports (So you can use 'db' and 'auth' in other files)
export { db, auth };