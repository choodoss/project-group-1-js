import { collection, addDoc } from "firebase/firestore";
import { FirebaseStorage } from "./Firebase-init";
import firebase from 'firebase/app';
import 'firebase/firestore';

const add = document.querySelector('.add-to-watched')
console.log(add)
add.addEventListener('click', addInfo)
function addInfo (e){
    e.preventDefault()
    console.log('yeap')
    const saveMovie = (movieData) => {
  FirebaseStorage.collection('movies').add(movieData)
    .then(() => {
      console.log('Фільм успішно додано до Firebase!');
    })
    .catch((error) => {
      console.error('Помилка при додаванні фільму до Firebase:', error);
    });
};
    console.log ('you are here')
    try {
    const docRef = addDoc(collection(FirebaseStorage, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}  



export { saveMovie };