import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfLMMU_UDvsFmYU-LZD57uGCraqdCfV3E",
  authDomain: "bubblebubblegum.firebaseapp.com",
  projectId: "bubblebubblegum",
  storageBucket: "bubblebubblegum.firebasestorage.app",
  messagingSenderId: "487697741805",
  appId: "1:487697741805:web:769633c105f77f79e919e4",
}

const app = initializeApp(firebaseConfig)

// ✅ THIS is what Login.jsx imports
export const auth = getAuth(app)