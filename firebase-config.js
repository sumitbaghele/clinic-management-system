import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// Replace with YOUR actual config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  // Your real API key here
  authDomain: "your-project-id.firebaseapp.com",  // Your real auth domain
  projectId: "your-project-id",  // Your real project ID
  storageBucket: "your-project-id.appspot.com",  // Your real storage bucket
  messagingSenderId: "123456789012",  // Your real sender ID
  appId: "1:123456789012:web:abcdef123456"  // Your real app ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
