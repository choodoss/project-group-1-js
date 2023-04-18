import { collection, addDoc } from "firebase/firestore"
import { FirebaseStorage } from "./Firebase-init"

const add = document.querySelector('#btn')
console.log(add)
add.addEventListener('click', addInfo)
function addInfo (e){
    e.preventDefault()
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
