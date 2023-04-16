import { filmCardMacker } from './film-card';
import { filmApiService } from './film-api-service';

const body = document.querySelector('body');
const gallery = document.querySelector('.films-list');
const modalBody = document.querySelector('.about-film-modal');

gallery.addEventListener('click', onClick);
function onClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const selectedMovie = e.target.attributes;
  console.log(selectedMovie);

  filmApiService(selectedMovie).then(data => {
    console.log(data);
  });
}

function removeModal() {
  const modalCloseBtn = document.querySelector('.close-btn');
  const modal = document.querySelector('.about-film-modal');

  body.classList.remove('body-no-scroll');
  modalBody.classList.add('is-hidden');

  function removeMarkup() {
    modal.remove();
  }

  document.removeEventListener('keydown', escCheck);
  modalCloseBtn.removeEventListener('click', closeBtn);
  modalBody.removeEventListener('click', onBackdropClick);
}

function escCheck(e) {
  if (e.code !== 'Escape') {
    return;
  }
  removeModal();
}

function closeBtn(e) {
  if (e.target.nodeName !== 'svg') {
    return;
  }
  removeModal();
}

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  removeModal();
}
