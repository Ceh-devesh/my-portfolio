import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDEHdlynd_9JL6KQtcU4goODU5lgZntpSY",
  authDomain: "devesh-porfolio.firebaseapp.com",
  projectId: "devesh-porfolio",
  storageBucket: "devesh-porfolio.appspot.com",
  messagingSenderId: "103134198765",
  appId: "1:103134198765:web:c1b7e4edebfe5cc2a385e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()