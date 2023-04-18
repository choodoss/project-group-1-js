import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlAtEL7zCWp_C_EyJztwCHo0AP8-f6-Uk",
  authDomain: "filmoteka-jsgroup.firebaseapp.com",
  databaseURL: "https://filmoteka-jsgroup-default-rtdb.firebaseio.com",
  projectId: "filmoteka-jsgroup",
  storageBucket: "filmoteka-jsgroup.appspot.com",
  messagingSenderId: "836192879664",
  appId: "1:836192879664:web:b40668c536b01de0d159f5",
  measurementId: "G-Q34JZ61PV1"
  };

 export const FirebaseApp = initializeApp(firebaseConfig);
 export const FirebaseStorage = getFirestore(FirebaseApp);