import { db } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

export async function generateBill(patientId, charges) {
  const total = charges.reduce((sum, charge) => sum + charge.amount, 0);
  const billsRef = collection(db, 'bills');
  await addDoc(billsRef, { patientId, charges, total, date: new Date() });
  return { total, billId: 'generated-id' }; // Return bill details
}
