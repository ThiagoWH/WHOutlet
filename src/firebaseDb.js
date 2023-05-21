import {initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBa9wJ2lkywDmQoTv2U87y29M2PXHYmQHc",
  authDomain: "whoutleet-360b2.firebaseapp.com",
  projectId: "whoutleet-360b2",
  storageBucket: "whoutleet-360b2.appspot.com",
  messagingSenderId: "1074375907187",
  appId: "1:1074375907187:web:f4ea0993a5e5dce9f59706"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;