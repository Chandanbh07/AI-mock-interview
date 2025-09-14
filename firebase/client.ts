
import { initializeApp , getApp, getApps} from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD98GCGjorBFkqkk2iFToh8qemqAeI5JtY",
  authDomain: "prepwise-6aedd.firebaseapp.com",
  projectId: "prepwise-6aedd",
  storageBucket: "prepwise-6aedd.firebasestorage.app",
  messagingSenderId: "201054716756",
  appId: "1:201054716756:web:22f0caa643ea741f75fec1",
  measurementId: "G-C4KPYQZ21X"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app); 