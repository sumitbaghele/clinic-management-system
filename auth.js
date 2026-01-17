import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

export async function loginUser(email, password, role) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Check role in Firestore (e.g., user doc has 'role': 'doctor' or 'receptionist')
    // Redirect based on role
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function registerUser(email, password, role) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Save role to Firestore
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
