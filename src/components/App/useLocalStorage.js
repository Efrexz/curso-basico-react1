import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
        //si no hay nada en localstorage enviamos un array para que no se rompa la app
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue; //enviamos array para que no se rompa la app
    } else {
        //convertimos el string en un array para poder iterar
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    function saveItem(newItem) {
        //funcion para actualizar localstorage cada vez que agreguemos o eliminemos una task
        const localStorageStringify = JSON.stringify(newItem);
        localStorage.setItem(itemName, localStorageStringify);
        setItem(newItem);
    }

    return [item, saveItem];
}

export {useLocalStorage};