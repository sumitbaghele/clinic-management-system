import { loginUser } from './auth.js';
import { addPatientInfo, getPatientDetails } from './patient.js';
import { generateBill } from './billing.js';

// Example: Handle login form
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value; // 'doctor' or 'receptionist'
  const result = await loginUser(email, password, role);
  if (result.success) {
    // Redirect to dashboard based on role
    window.location.href = role === 'doctor' ? 'doctor-dashboard.html' : 'receptionist-dashboard.html';
  } else {
    alert(result.error);
  }
});

// Add more event listeners for patient/billing forms
