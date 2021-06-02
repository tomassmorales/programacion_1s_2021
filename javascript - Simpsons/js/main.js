// completar las variables para que el programa funcione

window.addEventListener('load', function () {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");

    let nombre;

    let saludo = document.querySelector("#saludo");

    let span = document.querySelector("span");

    titulo.addEventListener("mouseover", function () {
        nombre = prompt("¿COMO TE LLAMAS?")
        console.log(nombre)
        console.log(titulo.innerText)
        if (nombre === undefined || nombre === null) {
            saludo.innerText = `BIENVENID@`
            titulo.style.display = "none"
            span.style.display = "block"
        } else {
            saludo.innerText = `BIENVENID@ ${nombre.toUpperCase()}`
            titulo.style.display = "none"
            span.style.display = "block"
        }
    })

    let bienvenida = document.querySelector(".bienvenida")
    let personajes = document.querySelector(".personajes")

    span.addEventListener("click", function () {
        bienvenida.style.display = "none"
        personajes.style.display = "flex"
    })


    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    let bart = document.querySelector("#bart");
    let lisa = document.querySelector("#lisa");
    let homero = document.querySelector("#homero");
    let marge = document.querySelector("#marge");
    let maggie = document.querySelector("#maggie");
    let milhouse = document.querySelector("#milhouse");
    let burns = document.querySelector("#burns");
    let patiño = document.querySelector("#bobPatinio");
    let ned = document.querySelector("#flanders");
    let duffman = document.querySelector("#duffman");
    let gorgory = document.querySelector("#gorgory");
    let nelson = document.querySelector("#nelson");

    bart.addEventListener("click", function () {
        bart.classList.toggle("personaje-seleccionado")
    })

    lisa.addEventListener("dblclick", function () {
        lisa.classList.toggle("personaje-seleccionado")
    })

    homero.addEventListener("click", function () {
        homero.classList.toggle("personaje-seleccionado")
    })

    marge.addEventListener("mouseover", function () {
        marge.classList.toggle("personaje-seleccionado")
    })

    maggie.addEventListener("mouseout", function () {
        maggie.classList.toggle("personaje-seleccionado")
    })

    milhouse.addEventListener("click", function () {
        milhouse.classList.toggle("personaje-seleccionado")
    })

    burns.addEventListener("mouseover", function () {
        burns.classList.toggle("personaje-seleccionado")
    })

    patiño.addEventListener("dblclick", function () {
        patiño.classList.toggle("personaje-seleccionado")
    })

    ned.addEventListener("mouseover", function () {
        ned.classList.toggle("personaje-seleccionado")
    })

    duffman.addEventListener("dblclick", function () {
        duffman.classList.toggle("personaje-seleccionado")
    })

    gorgory.addEventListener("mouseover", function () {
        gorgory.classList.toggle("personaje-seleccionado")
    })

    nelson.addEventListener("click", function () {
        nelson.classList.toggle("personaje-seleccionado")
    })

    /* Asignarle evento a la variable boton */
    let boton = document.querySelector(".boton");

    boton.addEventListener("click", function () {
        let personajesElegidos = document.querySelectorAll(".personaje-seleccionado");
        console.log(personajesElegidos);
    })

})