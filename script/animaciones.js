const parrafo = document.querySelector(".title__presentacion");

export function animacionLetras(){
    
    const presentacion = parrafo.innerHTML;
    parrafo.innerHTML='';
    const textoDiv = dividirTexto(presentacion);

    console.log(textoDiv);

    llenarConten(textoDiv)

}

const dividirTexto = (texto)=>{
    const textoDiv = texto.split(' ');
    return textoDiv;
}

function llenarConten(texto, index) {
    for ( index = 0; index < texto.length; index++) {
        setTimeout(()=>{
            parrafo.innerHTML =parrafo.innerHTML + texto[index]+" ";
            console.log("object");
        },2000);
        break
    }
    //llenarConten(texto,index)
}



    