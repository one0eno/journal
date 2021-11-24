

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

  // Your web app's Firebase configuration
const firebaseConfigTesting = {
    apiKey: "AIzaSyDfIvK9NsuseRH-IQpRhqnZ-6sEo_2-GO4",
    authDomain: "react-app-journal-test-ebc21.firebaseapp.com",
    projectId: "react-app-journal-test-ebc21",
    storageBucket: "react-app-journal-test-ebc21.appspot.com",
    messagingSenderId: "963541185835",
    appId: "1:963541185835:web:31f55d5b4b372dfd16816e"
  };

  if(process.env.NODE_ENV === 'test')
  {
    //testing
    // Initialize Firebase
    initializeApp(firebaseConfigTesting);
  } else {
    //dev/prod
    // Initialize Firebase
   initializeApp(firebaseConfig);
  }
  
  const db = getFirestore();
  console.log("sssssssssssssssssssssssssssssssss")
  console.log(db)
  console.log("sssssssssssssssssssssssssssssssss")
  const googleAuthProvider = new GoogleAuthProvider();

  export {
      db,
      googleAuthProvider
  }