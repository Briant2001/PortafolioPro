let nombre = document.getElementById('nombre');
let asunto = document.getElementById('asunto');
let mensaje_usuario = document.getElementById('mensaje-usuario');
let mensaje = document.getElementById('mensaje-error');
let mensaje2 = document.getElementById('mensaje-error2');
let mensaje3 = document.getElementById('mensaje-error3');
let timeout;
let timeout2;
let timeout3;

nombre.addEventListener('keydown', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if ((nombre.value).length > 50) {
        mensaje.style.display='block';
        mensaje.innerHTML = "Lo ciento no debes exceder mas de los 50 caracteres"
        mensaje.style.color = "red";
        nombre.value="";
      }else{
        mensaje.style.display='none';
      }
      clearTimeout(timeout)
    },500)
  })

  asunto.addEventListener('keydown', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if ((asunto.value).length > 50) {
        mensaje2.style.display='block';
        mensaje2.innerHTML = "Lo ciento no debes exceder mas de los 50 caracteres"
        mensaje2.style.color = "red";
        asunto.value="";
      }else{
        mensaje2.style.display='none';
      }
      clearTimeout(timeout)
    },500)
  })

  mensaje_usuario.addEventListener('keydown', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if ((mensaje_usuario.value).length > 300) {
        mensaje3.style.display='block';
        mensaje3.innerHTML = "Lo ciento no debes exceder mas de los 300 caracteres"
        mensaje3.style.color = "red";
        mensaje_usuario.value="";
      }else{
        mensaje3.style.display='none';
      }
      clearTimeout(timeout)
    },500)
  })