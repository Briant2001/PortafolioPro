const menu = document.querySelector("[data-nav-menu]");
let menuBol = false;
let ocultar = document.querySelector(".div-ocultar-main");

document.querySelector("[data-nav-btn]").addEventListener("click",()=>{
    if (menuBol) {
        menu.classList.remove("show");
        ocultar.style.display="none";
        menuBol= false;
    }else{
        menu.classList.add("show");
        ocultar.style.display="block";
        menuBol=true;
    }
});


const btns = document.querySelectorAll(".nav_link");
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click",()=>{
        ocultar.style.display="none";
        menu.classList.remove("show");
    })
    
}

document.querySelector(".div-ocultar-main").addEventListener("click",()=>{
        ocultar.style.display="none";
        menu.classList.remove("show");
});



















/*
ocument.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        console.log(toggle);
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });


    **/