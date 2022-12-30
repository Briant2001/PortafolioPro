export function valida(input) {
    const tipoInput = input.dataset.tipo;
    validarLengh(input);
    if (input.validity.valid) {
        console.log('Si se valido');
        input.parentElement.classList.remove('input-container--invalid');
    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.form__mensaje-error').innerHTML = mostrarError(tipoInput,input);
    }

}
function validarLengh(input) {
    if (input.value.length > 50) {
        input.setCustomValidity('Caracteres exedidos');
    }else{
        input.setCustomValidity('');
    }
    
}
const menajesErrores = {
    nombre:{
        valueMissing:"El campo nombre no debe estar vacio",
        customError:"Solo 50 caracteres"
    },
    email :{
        valueMissing:'El campo email no puede estar vacio',
        typeMismatch:'El correo no es valido',
        customError:"Solo 50 caracteres"

    },
    asunto:{
        valueMissing:"El campo asunto no dede estar vacio",
        customError:"Solo 50 caracteres"
    }
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "customError"
]  
function mostrarError(tipoInput, input) {
    let mensaje='';
    tipoErrores.forEach(error => {
        if (input.validity[error]) {
            
            mensaje =  menajesErrores[tipoInput][error];
        }

    })
    return mensaje;
}
