import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "airnow-personalized-dashboard",
  "appId": "1:834290584336:web:1a64cd60e34b854923f395",
  "storageBucket": "airnow-personalized-dashboard.firebasestorage.app",
  "apiKey": process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDTOksitScZ2nFwARi_ZCqGx51Fmg5OEOA",
  "authDomain": process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "airnow-personalized-dashboard.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "834290584336"
};


const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
