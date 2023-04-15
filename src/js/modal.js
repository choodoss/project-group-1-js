document.addEventListener('DOMContentLoaded', function (e) {
  e.preventDefault();
  const modals = ['data-modal', 'team-modal'];

  modals.forEach(element => {
    const openModalSelector = element + "-open";
    const closeModalSelector = element + "-close";
    const modal = document.querySelector("[" + element + "]");
    if (!modal) logModalError("Can`t find Modal with attribute " + modal);

    // Додаємо обробник подій на батьківський елемент, для оновлення посилань
    const parentElement = document.body;
    parentElement.addEventListener("click", function (event) {
      const target = event.target;
      const openModalBtn = target.closest("[" + openModalSelector + "]");
      const closeModalBtn = target.closest("[" + closeModalSelector + "]");
      if (openModalBtn) {
        toggleModal();
      } else if (closeModalBtn) {
        toggleModal();
      }
    });

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      modal.classList.toggle("is-hidden");
    }
  });
}, false);

function logModalError(text) {
  const styles = "color: #BADA55";
  console.log("%c" + text, styles);
}