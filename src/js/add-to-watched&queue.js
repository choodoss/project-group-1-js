import { load, save } from './localStorageAPI';
import { filmCardMacker } from './film-card';

document.addEventListener('DOMContentLoaded', function (e) {
    const refs = {
        btnWatched: document.querySelector('.button--watched'),
        btnQueue: document.querySelector('.button--queue'),
        addToWatchedBtn: document.querySelector('.add-to-watched'),
        addToQueueBtn: document.querySelector('.add-to-queue'),
        pagination: document.querySelector('.page-list'),
        moviesEl: document.querySelector('.films-list'),
        btnWrapper: document.querySelector('#buttonWrapper'),
        watchedQueueBtnList: document.querySelector('.header-nav__list-2'),
    };

})

const localStorageKeys = {
    WATCHED: 'watched',
    QUEUE: 'queue',
};

const state = {
    currentPage: 1,
    totalPages: 0,
    activeFilm: null,
    query: null,
    whatchedOrQueue: null,
};

const resetCurrentPage = () => {
    // присвоює поточній сторінці значення 1
    //функція використовується для скидання сторінки на початкове значення при зміні параметрів
    state.currentPage = 1;
};

const clearPagination = () => {
    //використовується для видалення попередньої пагінації зі сторінки
    pagination.innerHTML = '';
};

// const renderPaginationMarkup = () => {
//   //функція вставляє HTML-код розмітки пагінації на сторінку.
//   pagination.insertAdjacentHTML('beforeend', paginationMarkup());
// }; // для пагінації

const localPaginate = (array, currentPage) => {
    //функція реалізує локальну пагінацію масиву
    if (!array) return; // перевіряє, чи переданий масив існуєякщо ні, то повертає undefined
    const itemsPerPage = 6; //  кількість елементів на одній сторінці
    const startIndex = (currentPage - 1) * itemsPerPage; // індекс першого елемента поточної сторінки
    state.totalPages = Math.ceil(array.length / itemsPerPage); // розраховує загальну кількість сторінок
    return array.slice(startIndex, startIndex + itemsPerPage); //  повертає новий масив, який складається з елементів від startIndex до startIndex + itemsPerPage у переданому масиві
};

const updateLibRender = async data => {
    // функція відображає список фільмів з масиву data
    try {
        let markup = '';
        const warning = `<p class="watched-warning">No movies have been added yet</p>`;
        resetCurrentPage(); // оновлює значення currentPage на 1
        const films = localPaginate(data, state.currentPage);
        if (data === undefined || data.length === 0) {
            // Якщо data порожній масив або undefined, функція викликає clearPagination() і виводить повідомлення warning
            clearPagination();
            markup = warning;
        } else {
            markup = await filmCardMacker(films); // викликає функцію для створення розмітки для кожного фільму  і виводить цю розмітку в markup
            clearPagination();
            // renderPaginationMarkup();
        }
        moviesEl.innerHTML = '';
        moviesEl.insertAdjacentHTML('beforeend', markup); //  виводить markup у films-list на сторінці
    } catch (error) {
        console.error(error);
    }
};

const onBtnAddToLibrary = evt => {
    //функція відповідає за додавання або видалення фільму зі списку переглянутих
    //або списку фільмів для перегляду в майбутньому  з локального сховища браузера
    const watchedFilmsArray = localStorageKeys.WATCHED || []; // записується значення ключа WATCHED з localStorage або порожній масив
    const queueFilmsArray = localStorageKeys.QUEUE || []; // записується значення ключа QUEUE з localStorage або порожній масив

    if (evt.target.innerText === 'ADD TO WATCHED') {
        saveToStorageFilm(
            watchedFilmsArray,
            localStorageKeys.WATCHED,
            'WATCHED',
            evt
        );
    } else if (evt.target.innerText === 'REMOVE FROM WATCHED') {
        deleteFromStorageFilm(
            watchedFilmsArray,
            localStorageKeys.WATCHED,
            'WATCHED',
            evt
        );
    } else if (evt.target.innerText === 'ADD TO QUEUE') {
        saveToStorageFilm(queueFilmsArray, localStorageKeys.QUEUE, 'QUEUE', evt);
    } else if (evt.target.innerText === 'REMOVE FROM QUEUE') {
        deleteFromStorageFilm(
            queueFilmsArray,
            localStorageKeys.QUEUE,
            'QUEUE',
            evt
        );
    }
};

refs.btnWrapper.addEventListener('click', onBtnAddToLibrary);

function saveToStorageFilm(array, key, keyValue, evt) {
    array.push(state.activeFilm); //додає обраний фільм до вказаного масиву
    save(key, array); // зберігає оновлений масив у локальному сховищі браузера
    evt.target.innerText = `REMOVE FROM ${keyValue}`; // змінює текст на кнопці для показу додавання фільму до списку
}

function deleteFromStorageFilm(array, key, keyValue, evt) {
    const filteredFilms = array.filter(film => film.id !== state.activeFilm.id); // видаляє обраний фільм з вказаного масиву,використовуючи метод filter для створення нового масиву
    save(key, filteredFilms); // зберігає оновлений масив у локальному сховищі браузера
    evt.target.innerText = `ADD TO ${keyValue}`; // змінює текст на кнопці  для показу видалення фільму зі списку
}

export function updateMarkupLibrary(evt) {
    // функція призначена для оновлення розмітки сторінки бібліотеки фільмів в залежності від дії, яку виконує користувач
    if (evt.target.innerText === 'ADD TO WATCHED') {
        deleteFromWatchedMarkup();
    } else if (evt.target.innerText === 'REMOVE FROM WATCHED') {
        deleteFromWatchedMarkup();
    } else if (evt.target.innerText === 'ADD TO QUEUE') {
        deleteFromQueueMarkup();
    } else if (evt.target.innerText === 'REMOVE FROM QUEUE') {
        deleteFromQueueMarkup();
    }
}
async function deleteFromWatchedMarkup() {
    // функція відповідає за відображення списку фільмів, які вже були переглянуті користувачем.
    resetCurrentPage();
    const watchedFilmsinLocalStorage = load(localStorageKeys.WATCHED) || []; // завантажує збережені в localStorage дані про фільми, що були додані до списку переглянутих.
    const films = localPaginate(watchedFilmsinLocalStorage, state.currentPage); // створюється підмасив фільмів для поточної сторінки
    updateLibRender(films);
    chahgeBtnActiveStatus(refs.btnWatched, refs.btnQueue);
}

async function deleteFromQueueMarkup() {
    // функція відповідає за відображення списку фільмів, яких чекають, щоб їх переглянули.
    resetCurrentPage();
    const queueFilmsinLocalStorage = load(localStorageKeys.QUEUE) || []; // отримується масив фільмів, які знаходяться в локальному сховищі під ключем "QUEUE"
    const films = localPaginate(queueFilmsinLocalStorage, state.currentPage); // створюється підмасив фільмів для поточної сторінки
    updateLibRender(films);
    chahgeBtnActiveStatus(refs.btnQueue, refs.btnWatched);
}

function chahgeBtnActiveStatus(elFirst, elSecond) {
    // функція змінює статус активності кнопок в інтерфейсі
    elFirst.classList.add('active'); // треба додати в sass background-color: #ff6b08; на button
    elSecond.classList.remove('active');
}

//кнопки на модальному вікні

window.onload = () => {
    // функція запускається тільки тоді, коли вікно браузера та усі елементи сторінки завантажилися
    const watchedFilms = localStorageKeys.WATCHED || []; // записується значення ключа WATCHED з localStorage або порожній масив
    const queueFilms = localStorageKeys.QUEUE || []; // записується значення ключа QUEUE з localStorage або порожній масив

    if (watchedFilms.find(film => film.id === state.activeFilm.id)) {
        // перевіряє чи в масиві watchedFilms є об'єкт з id,який збігається з id активного фільму
        refs.addToWatchedBtn.innerText = 'REMOVE FROM WATCHED';
    } else {
        refs.addToWatchedBtn.innerText = 'ADD TO WATCHED';
    }
    if (queueFilms.find(film => film.id === state.activeFilm.id)) {
        // перевіряє чи в масиві queueFilms є об'єкт з id,який збігається з id активного фільму
        refs.addToQueueBtn.innerText = 'REMOVE FROM QUEUE';
    } else {
        refs.addToQueueBtn.innerText = 'ADD TO QUEUE';
    }
}; //кнопки на модальному вікні

const onClickWatched = async evt => {
    //  функція обробляє клік на кнопці зі списком переглянутих або чергових фільмів
    if (evt.target.nodeName !== 'BUTTON') return; // перевіряє, чи клік був на кнопці
    if (evt.target.classList.contains('active')) return; // перевіряє, чи кнопка не є вже активною
    const activeBtn = document.querySelector('.active');
    let key = evt.target.dataset.value.toUpperCase(); // зберігає ключ, що відповідає списку фільмів, який потрібно показати, в стані додатку
    state.whatchedOrQueue = key;
    const data = load(localStorageKeys[key]); // завантажує дані з локального сховища, використовуючи ключ
    updateLibRender(data); // оновлює відображення списку фільмів на сторінці
    activeBtn.classList.remove('active'); // додає клас .active до натиснутої кнопки
    evt.target.classList.add('active'); // видаляє  клас .active до натиснутої кнопки
};

refs.watchedQueueBtnList.addEventListener('click', onClickWatched);