import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        //usamos el setTimeout para simular la demora de envios de datos y poder visualizar la parte de carga de datos
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;
                if (!localStorageItem) {
                    //si no hay nada en localstorage enviamos un array para que no se rompa la app
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue; //enviamos array para que no se rompa la app
                } else {
                    //convertimos el string en un array para poder iterar
                    parsedItem = JSON.parse(localStorageItem);
                    //Si no se cumple el if. ya que existe un valor distinto al initial value en localStorage. llamaremos a setitem para modificar su valor
                    setItem(parsedItem);
                }

                setLoading(false);//si llega hasta este punto es que ya cargo bien y cambiamos su valor a falso para que pueda renderizar las tareas. ya que mientras sea true solo aparecera cargando
            }
            catch(error){
                setLoading(false);//tambien si llega a ocurrir un error cambiamos el estado de carga para ya no mostrar el mensaje que se esta cargando y seguir a mostrar el error
                setError(true)//si llega a fallar cambiamos el error a true para que se muestre en pantalla el mensaje de error
            }
        }, 2000)
    }, [])//enviamos un array vacio para que solo se ejecute una vez

    function saveItem(newItem) {
        //funcion para actualizar localstorage cada vez que agreguemos o eliminemos una task
        const localStorageStringify = JSON.stringify(newItem);
        localStorage.setItem(itemName, localStorageStringify);
        setItem(newItem);
    }
    //recomiendan si estas retornando mas de dos valores. lo hagas con un objeto, ya que con array tendrias que acordarse de su posicion
    return {item, saveItem, error, loading};
}

export {useLocalStorage};