import {valida} from './validacion.js';

const inputs = document.querySelectorAll('.form__input');
( ()=>{
inputs.forEach(input => {
    //blur: cuando el cursor ya no esta en el input
    input.addEventListener('blur',(input) =>{
        valida(input.target);
    })
})
})()
