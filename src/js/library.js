const btnWatched = document.querySelector('.button--watched');
const btnQueue = document.querySelector('.button--queue');
const filmListContainer = document.querySelector('.films-list');
const emptyLibrary = document.querySelector('.library-empty');

btnWatched.addEventListener('click', toggleEmptyLibrary);
btnQueue.addEventListener('click', toggleEmptyLibrary);

function toggleEmptyLibrary() {
    if (filmListContainer.children.length === 0) { 
      emptyLibrary.classList.remove('is-hidden');
      filmListContainer.classList.add('is-hidden'); 
    } else {
      emptyLibrary.classList.add('is-hidden'); 
      filmListContainer.classList.remove('is-hidden');
    }
  }