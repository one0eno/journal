import 'firebase/firestore';
import 'firebase/auth'

import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { GoogleAuthProvider } from '@firebase/auth';


// const firebaseConfig = {
//     apiKey: "AIzaSyBjVatKO_lwCF08c639KWfkJ7ADsxuaoVk",
//     authDomain: "react-app-cursos-8687a.firebaseapp.com",
//     projectId: "react-app-cursos-8687a",
//     storageBucket: "react-app-cursos-8687a.appspot.com",
//     messagingSenderId: "601662499386",
//     appId: "1:601662499386:web:c33e4960edd1247946a303"
//   };

console.log(process.env.NODE_ENV)

const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId
  };

initializeApp(firebaseConfig);

//   if(process.env.NODE_ENV === 'test')
//   {
//     //testing
//     // Initialize Firebase
//     initializeApp(firebaseConfigTesting);
//   } else {
//     //dev/prod
//     // Initialize Firebase
//    initializeApp(firebaseConfig);
//   }
  
  const db = getFirestore();
  //console.log("sssssssssssssssssssssssssssssssss")
  //console.log(db)
  //console.log("sssssssssssssssssssssssssssssssss")
  const googleAuthProvider = new GoogleAuthProvider();

  export {
      db,
      googleAuthProvider
  }