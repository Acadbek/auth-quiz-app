// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSrN3JrNjrgAzYtjc52FpgLxG-4nGSavs",
  authDomain: "vue-fire-auth-yt-a6182.firebaseapp.com",
  projectId: "vue-fire-auth-yt-a6182",
  storageBucket: "vue-fire-auth-yt-a6182.appspot.com",
  messagingSenderId: "503238993217",
  appId: "1:503238993217:web:fca0a0c7ce4afdb3192dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }