// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-niDGy4CA05xVaGve_A1lcYc9rNzdssY",
  authDomain: "pokedex-58407.firebaseapp.com",
  projectId: "pokedex-58407",
  storageBucket: "pokedex-58407.appspot.com",
  messagingSenderId: "401994704068",
  appId: "1:401994704068:web:d530a8617accfdb199d591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

const loginWithEmailAndPassword = async(email,password)=>{
  try{
    return await signInWithEmailAndPassword(auth,email,password);
  
  }catch(err){
    console.log(err);
    return err;
  }
};

export{
  auth,
  loginWithEmailAndPassword
};