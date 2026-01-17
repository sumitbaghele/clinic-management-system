# Clinic Management System

A web-based system for managing clinic operations using HTML, CSS, JS, and Firebase.

## Features
- Doctor login and patient details view.
- Receptionist login, token assignment, and billing.
- Auto token generation and patient info storage.

## Technologies
- Frontend: HTML, CSS, JS (ES6 modules).
- Backend: Firebase (Auth, Firestore).

## Setup
1. Clone the repo: `git clone https://github.com/yourusername/clinic-management-system.git`
2. Set up Firebase project and add config to `firebase-config.js`.
3. Open `index.html` in a browser or deploy to Firebase Hosting.

## Workflow
1. User logs in (doctor/receptionist).
2. Receptionist assigns tokens and creates bills.
3. Doctor views patient details.
4. Data is stored in Firestore.

## Execution
- Run locally: Open `index.html` in a browser.
- Deploy: Use Firebase CLI (`firebase deploy`).

## Evaluation Metrics
- Code: Modular, safe, testable, maintainable, portable.
- Database: Firebase Firestore for secure storage.
