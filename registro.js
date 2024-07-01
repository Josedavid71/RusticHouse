const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const date = document.getElementById("date");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length < 6){
        warnings += "el nombre no es valido <br>"
        entrar = true;
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += "el Email no es valido <br>"
        entrar = true;
    }
    if(dni.value.length < 7){
        warnings += "Documento no valido <br>"
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})

