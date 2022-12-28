import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF1hr-P7ZO1392ih99I_N6j_FKLGUB5bc",
  authDomain: "vue3-chatappc.firebaseapp.com",
  projectId: "vue3-chatappc",
  storageBucket: "vue3-chatappc.appspot.com",
  messagingSenderId: "79783537091",
  appId: "1:79783537091:web:f72c83778599a7dca1f576",
  measurementId: "G-WHQ9PR6NRZ"
};

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp);


// Firestore Reference
const db = getFirestore(firebaseApp);

export {db,auth}