// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIxFRtQmN60MXtD9GKFD1L395BLyhKqEU",
  authDomain: "moha-milon-51.firebaseapp.com",
  projectId: "moha-milon-51",
  storageBucket: "moha-milon-51.appspot.com",
  messagingSenderId: "1062425264808",
  appId: "1:1062425264808:web:c1cc39aff78d14aab8389d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;