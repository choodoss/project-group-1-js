const teamModal = document.getElementById('team-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

teamModal.onclick = function () {
  modal.style.display = 'block';
  addEventListeners();
};

closeModal.onclick = function () {
  modal.style.display = 'none';
  removeEventListeners();
};

function addEventListeners() {
  document.addEventListener('keydown', onEscKeyDown);
  modal.addEventListener('click', onModalClick);
}

function removeEventListeners() {
  document.removeEventListener('keydown', onEscKeyDown);
  modal.removeEventListener('click', onModalClick);
}

function onEscKeyDown(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    removeEventListeners();
  }
}

function onModalClick(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    removeEventListeners();
  }
}
