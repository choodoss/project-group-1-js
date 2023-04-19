import { cardFilmMacker } from './about-film-modal';

document.addEventListener(
  'DOMContentLoaded',
  function (e) {
    e.preventDefault();
    const modals = ['data-modal', 'team-modal', 'data-registaration', 'data-signin'];

    modals.forEach(element => {
      const openModalSelector = element + '-open';
      const closeModalSelector = element + '-close';
      const modal = document.querySelector('[' + element + ']');
      if (!modal) logModalError('Can`t find Modal with attribute ' + modal);

      // Додаємо обробник подій на батьківський елемент, для оновлення посилань
      const parentElement = document.body;
      parentElement.addEventListener('click', function (event) {
        const target = event.target;
        const openModalBtn = target.closest('[' + openModalSelector + ']');
        const closeModalBtn = target.closest('[' + closeModalSelector + ']');
        if (openModalBtn) {
          if (target.className === 'film__img') {
            cardFilmMacker(target.dataset);
          }
          toggleModal();
        } else if (closeModalBtn) {
          toggleModal();
        }
      });

      function toggleModal() {
        document.body.classList.toggle('modal-open');
        modal.classList.toggle('is-hidden');

        // Додаємо обробника подій для закриття модального вікна при натисканні на клавішу 'Escape'
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            modal.classList.add('is-hidden');
            document.body.classList.remove('modal-open');
          }
        });
      }

      // Додаємо обробника подій для закриття модального вікна при натисканні на backdrop
      modal.addEventListener('click', function (event) {
        if (event.target === modal) {
          toggleModal();
        }
      });
    });
  },
  false
);

function logModalError(text) {
  const styles = 'color: #BADA55';
  console.log('%c' + text, styles);
}
