import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

export async function generateToken() {
  const tokensRef = collection(db, 'tokens');
  const snapshot = await getDocs(tokensRef);
  const tokenNumber = snapshot.size + 1; // Simple auto-increment
  await addDoc(tokensRef, { number: tokenNumber, assigned: false });
  return tokenNumber;
}

export async function addPatientInfo(name, details, prescription) {
  const patientsRef = collection(db, 'patients');
  await addDoc(patientsRef, { name, details, prescription, token: await generateToken() });
}

export async function getPatientDetails(token) {
  const patientsRef = collection(db, 'patients');
  const snapshot = await getDocs(patientsRef);
  return snapshot.docs.find(doc => doc.data().token === token)?.data();
}
