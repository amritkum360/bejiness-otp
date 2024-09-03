import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJOB1L_-YnodB9Feqr6t8yvDUKBjb9SSc",
    authDomain: "otpform-e3999.firebaseapp.com",
    projectId: "otpform-e3999",
    storageBucket: "otpform-e3999.appspot.com",
    messagingSenderId: "69049709326",
    appId: "1:69049709326:web:af07723747ec6ed02d1d5f",
    measurementId: "G-LX761452LL"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyCbG9FuW5m7matWNJuNW4eRNmgJSkFiY2U",
//   authDomain: "opt-3-874e2.firebaseapp.com",
//   projectId: "opt-3-874e2",
//   storageBucket: "opt-3-874e2.appspot.com",
//   messagingSenderId: "325995639942",
//   appId: "1:325995639942:web:45b5bc194e414a791fcd07",
//   measurementId: "G-G6HXLDS6MQ",
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCJOB1L_-YnodB9Feqr6t8yvDUKBjb9SSc",
//   authDomain: "otpform-e3999.firebaseapp.com",
//   projectId: "otpform-e3999",
//   storageBucket: "otpform-e3999.appspot.com",
//   messagingSenderId: "69049709326",
//   appId: "1:69049709326:web:af07723747ec6ed02d1d5f",
//   measurementId: "G-LX761452LL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);