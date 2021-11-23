

import 'firebase/firestore';
import 'firebase/auth'

import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { GoogleAuthProvider } from '@firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBjVatKO_lwCF08c639KWfkJ7ADsxuaoVk",
    authDomain: "react-app-cursos-8687a.firebaseapp.com",
    projectId: "react-app-cursos-8687a",
    storageBucket: "react-app-cursos-8687a.appspot.com",
    messagingSenderId: "601662499386",
    appId: "1:601662499386:web:c33e4960edd1247946a303"
  };
  
  // Initialize Firebase
   initializeApp(firebaseConfig);

  const db = getFirestore();

  const googleAuthProvider = new GoogleAuthProvider();

  export {
      db,
      googleAuthProvider
  }