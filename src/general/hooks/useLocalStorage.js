import {useState} from "react";

export function useLocalStorage(key, defaultValue) {

    const [mediator, updateMediator] = useState(0);

    return [
        localStorage.getItem(key) || defaultValue, // drawing
        (newValue)=>{                         // saveDrawing
            localStorage.setItem(key, newValue);
            updateMediator(Math.random());
        }
    ]
    //  [drawing, saveDrawing]
}