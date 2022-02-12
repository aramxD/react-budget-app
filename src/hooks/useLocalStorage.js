import { useState, useEffect } from 'react'


//Esta funcion nos ayuda a guardar los datos de manera local
export default function useLocalStorage(key, defaultValue) {
    //Aqui se guardan como json
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        // Aqui cuidamos si la informacion se guardo como funcion o como valor
        // Si default value es typeof= funcion regresa la funcion
        if (typeof defaultValue === 'function') {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    //useEfect ---> No ayuda a actualizar los datos almacenados de manera local
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}