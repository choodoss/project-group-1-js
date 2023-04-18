import { FirebaseApp } from "./Firebase-init";
import { getDatabase } from 'firebase/database';
import { getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(FirebaseApp)
  
 onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const signUp = document.querySelector('.button--signin')
        // signUp.disabled=true;
      } else {
        console.log('nope uid')
      
      }
    });


const fromSubmit = document.querySelector('.registration-submit');
fromSubmit.addEventListener('submit', signUp);

function signUp(e) {
  e.preventDefault();
  const email = document.querySelector('#email').value.toString();
  const password = document.querySelector('#password').value.toString();
      try{createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
         const user = userCredential.user;
        console.log("Signed up successfully:", user);
        window.location.href = '#'
      })}
     
    catch(error){
      const errorCode = error.code;
      console.log('nopenopenope')
      // ..
    };}

    const singModal = document.querySelector('#SignIn-modal');
    singModal.addEventListener('submit', logIn)

  function logIn(e){ 
      e.preventDefault();
    const email = document.querySelector('#emailSingIn').value.toString();
    const password = document.querySelector('#passwordSingIn').value.toString();
 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log('yeap you are here')
      e.target.reset();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
   