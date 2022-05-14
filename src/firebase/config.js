import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDq3DWNBoVnyfsUx0XCL2s44FRS8tY5Pxo",
  authDomain: "olx-clone-5b51d.firebaseapp.com",
  projectId: "olx-clone-5b51d",
  storageBucket: "olx-clone-5b51d.appspot.com",
  messagingSenderId: "133468455189",
  appId: "1:133468455189:web:665a6961695ae65011291c",
  measurementId: "G-EMGTQGDD7C"
};

// Initialize Firebase
export  default  firebase.initializeApp(firebaseConfig);

