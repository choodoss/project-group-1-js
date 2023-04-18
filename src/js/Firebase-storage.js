import { collection, addDoc } from "firebase/firestore";
import {FirebaseApp} from "./Firebase-init";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  push,
  remove,
  get,
} from 'firebase/database';
  
  export class DatabaseAPI {
    #AUTH = getAuth(FirebaseApp);
    #DATABASE = getDatabase(FirebaseApp); 

    addToWatched(movieID) {
      onAuthStateChanged(this.#AUTH, user => {
        if (user) {
          let userId = user.uid;
          const reference = ref(
            this.#DATABASE,
            `users_library/${userId}/watched/${movieID}`
          );
          get(reference).then(snapshot => {
            if (snapshot.exists()) {
              console.log(`'${movieID}' is already in the Watched List`);
              return;
            } else {
              set(reference, movieID);
              console.log(`'${movieID.title}' added to Watched List`);
            }
          })
           .catch((error) => {
              console.error(error);
            })
        }
      });
    }
  
    addToQueue(movieID) {
      onAuthStateChanged(this.#AUTH, user => {
        if (user) {
          let userId = user.uid;
          const reference = ref(
            this.#DATABASE,
            `users_library/${userId}/queue/${movieID}`
          );
  
          get(reference).then(snapshot => {
            if (snapshot.exists()) {
              console.log(`'${movieID.title}' is already in the Queue List`);
              return;
            } else {
              set(reference, movieID);
              console.log(`'${movieID.title}' added to Queue List`);
            }
          });
        }
      });
    }
  
    async getWatchedList() {
      const user = await new Promise(resolve =>
        onAuthStateChanged(this.#AUTH, resolve)
      );
      if (!user) return;
  
      const userId = user.uid;
      const reference = ref(this.#DATABASE, `users_library/${userId}/watched/`);
  
      const snapshot = await get(reference);
      if (snapshot.exists) {
        const moviesObject = snapshot.val();
        const moviesArray = Object.keys(moviesObject).map(key => {
          return moviesObject[key];
        });
        console.log(moviesArray);
        return moviesArray;
      }
    }
  
    async getQueueList() {
      const user = await new Promise(resolve =>
        onAuthStateChanged(this.#AUTH, resolve)
      );
      if (!user) return;
  
      const userId = user.uid;
      const reference = ref(this.#DATABASE, `users_library/${userId}/queue/`);
  
      const snapshot = await get(reference);
      if (snapshot.exists) {
        const moviesObject = snapshot.val();
        const moviesArray = Object.keys(moviesObject).map(key => {
          return moviesObject[key];
        });
        console.log(moviesArray);
        return moviesArray;
      }
    }
  
    removeMovieFromWatched(movieID) {
      onAuthStateChanged(this.#AUTH, user => {
        let userId = user.uid;
  
        const reference = ref(this.#DATABASE, `users_library/${userId}/watched/`);
  
        onValue(reference, snapshot => {
          if (snapshot.val() === undefined || snapshot.val() === null) {
            return;
          }
  
          const refToRemove = ref(
            this.#DATABASE,
            `users_library/${userId}/watched/${movieID}`
          );
  
          remove(refToRemove);
          console.log('Movie removed from watched');
        });
      });
    }
  
    removeMovieFromQueue(movieID) {
      onAuthStateChanged(this.#AUTH, user => {
        let userId = user.uid;
  
        const reference = ref(this.#DATABASE, `users_library/${userId}/queue/`);
  
        onValue(reference, snapshot => {
          if (snapshot.val() === undefined || snapshot.val() === null) {
            return;
          }
  
          const refToRemove = ref(
            this.#DATABASE,
            `users_library/${userId}/queue/${movieID}`
          );
  
          remove(refToRemove);
          console.log('Movie removed from queue');
        });
      });
    }
  }