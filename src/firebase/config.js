// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBac22P4jn_X2S6WxVktLIJl_99gMwmsNg",
  authDomain: "mini-blog-efa93.firebaseapp.com",
  projectId: "mini-blog-efa93",
  storageBucket: "mini-blog-efa93.appspot.com",
  messagingSenderId: "766402611356",
  appId: "1:766402611356:web:6ab1a3746e1da086c34559"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Initialize firestore database
export const db = getFirestore(app);
