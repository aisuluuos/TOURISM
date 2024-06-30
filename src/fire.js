// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAByH8SAKSyzjwMYbmx7sre_ECz8IJ8hYI",
  authDomain: "tourism-566c6.firebaseapp.com",
  projectId: "tourism-566c6",
  storageBucket: "tourism-566c6.appspot.com",
  messagingSenderId: "964565001611",
  appId: "1:964565001611:web:3b233769a247671bcc3b8e",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
