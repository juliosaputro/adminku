import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
       apiKey: "AIzaSyDqj3zxB-h9ulByNkuzmQIt_GN-ZPpiOSs",
       authDomain: "tutrial-crud.firebaseapp.com",
       projectId: "tutrial-crud",
       storageBucket: "tutrial-crud.appspot.com",
       messagingSenderId: "106630696937",
       appId: "1:106630696937:web:26745e565a1d43537dc578",
       measurementId: "G-YX0Y7L5TX6"
     };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export {db,auth};