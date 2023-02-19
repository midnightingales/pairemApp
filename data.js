// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWh0_AkNJignWa9vCsP2mN9F-CNxU2T_0",
  authDomain: "pairem.firebaseapp.com",
  databaseURL: "https://pairem-default-rtdb.firebaseio.com",
  projectId: "pairem",
  storageBucket: "pairem.appspot.com",
  messagingSenderId: "619884163500",
  appId: "1:619884163500:web:0c23c2ce3850477b304a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const database = getDatabase();
var firstKey = document.getElementById("firstKey");
var lastKey = document.getElementById("lastKey");
var userKey = document.getElementById("userKey");
var emailKey = document.getElementById("emailKey");
var phoneKey = document.getElementById("firstKey");
var passKey = document.getElementById("firpassKeystKey");
var submitKey = document.getElementById("submitKey");

function insert(){
  set(ref(database,"User/" + userKey.value),{
    firstName: firstKey.value,
    lastName: lastKey.value,
    username: userKey.value,
    email: emailKey.value,
    phone: phoneKey.value,
    password: passKey.value
  })
  .then(()=>{
    alert("You Signed Up :)");
  })
  .catch((error)=>{
    alert(error);
  });
} 

submitKey.addEventListener('click',insert);


