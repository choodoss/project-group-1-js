export const localStorageAPI = {
    save,
    load,
};

function save(key, value) {
    // зберігає значення в форматі з JSON
    try {
        const dataJSON = JSON.stringify(value);
        localStorage.setItem(key, dataJSON);
    } catch (error) {
        console.log(error);
    }
}

function load(key) {
    // завантажує (віддає) значення в форматі з JSON
    try {
        const dataJSON = localStorage.getItem(key);
        return dataJSON === null
            ? { watched: [], queue: [] }
            : JSON.parse(dataJSON);
    } catch (error) {
        console.log(error);
    }
}