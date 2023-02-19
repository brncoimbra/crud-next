import { initializeApp, FirebaseApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseApp: FirebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

export default firebaseApp;