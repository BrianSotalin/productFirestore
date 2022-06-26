// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const cargarConfig=()=>{
// Initialize Firebase
const app = initializeApp(firebaseConfig);
global.dbCon=getFirestore(app);
console.log('working firestore')
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWOnqXe4wvHetoFTnPREHCu1QxJshDQSE",
  authDomain: "fbase1-d102e.firebaseapp.com",
  projectId: "fbase1-d102e",
  storageBucket: "fbase1-d102e.appspot.com",
  messagingSenderId: "847265884989",
  appId: "1:847265884989:web:8324e9644c00c3cb887354"
};

