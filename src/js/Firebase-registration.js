import { FirebaseApp } from "./Firebase-init";
import { getDatabase } from 'firebase/database';
import {
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
import { Notify } from "notiflix";

const btnRegistration = document.querySelector('#registration-modal-open')

const auth = getAuth(FirebaseApp)

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    btnRegistration.addEventListener('click', logOut)
    const signUp = document.querySelector('.button--signin')
    // btnRegistration.textContent = 'sign in'; // Зміна надпису на кнопці реєстрації
    btnRegistration.classList.add('header-nav__title--active') // додавання класу на кнопку реєстрації

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
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed up successfully:", user);
        window.location.href = '#'
        e.target.reset();
      })
  }

  catch (error) {
    const errorCode = error.code;
    console.log('nopenopenope')
    if (!path) {
      Notify.failure('Oh you alredy create account. Sign in')
    }
    // ..
  };
}

const singModal = document.querySelector('#SignIn-modal');
singModal.addEventListener('submit', logIn)

function logIn(e) {
  e.preventDefault();
  const email = document.querySelector('#emailSingIn').value.toString();
  const password = document.querySelector('#passwordSingIn').value.toString();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('yeap you are here')
      e.target.reset();
      singModal.classList.add('is-hidden')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function logOut({ target }) {
  btnRegistration.textContent = 'sign in'; // Зміна надпису на кнопці реєстрації

  signOut(auth)
}

