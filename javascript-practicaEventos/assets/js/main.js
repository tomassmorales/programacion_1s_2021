
    //1 y 2
window.addEventListener(`load`, function () {

    //3
    const botonAbracadabra = document.querySelector("#abracadabra");

    let nombreUsuario;

    botonAbracadabra.addEventListener(`click`, function () {
        nombreUsuario = prompt("Ingrese su nombre");

        console.log(nombreUsuario);

        const titular = document.querySelector("#titular");

        if (nombreUsuario !== undefined) {
            titular.innerHTML = `Hi. I'm <strong>${nombreUsuario}</strong>.`;
        }
    });

    //4, 5 y 6 
    const getInTouch = document.querySelector("#contacto");
    let parrafo = document.querySelector("#parrafoColor");

    console.log(getInTouch);
    console.log(parrafo);

    let colores = ["red", "yellow", "green", "black", "blue"]

    function colorAlAzar() {
        coloresRandom = Math.floor(Math.random() * 4) //colores.length también además del 4
        return `${colores[coloresRandom]}`
    }

    console.log(colorAlAzar());

    getInTouch.addEventListener("dblclick", function (e) {
        e.preventDefault();
        parrafo.style.background = `${colorAlAzar()}`
    })

    //7
    let seccion1 = document.querySelector("#seccion1")
    let seccion2 = document.querySelector("#seccion2")
    let seccion3 = document.querySelector("#seccion3")

    seccion1.addEventListener(`click`, function () {
        let titulo = this.querySelector("h3")
        alert(`Clickeaste en ${titulo.innerText}`)
    })
    seccion2.addEventListener("click", function () {
        let titulo = this.querySelector("h3")
        alert(`Clickeaste en ${titulo.innerText}`)
    })
    seccion3.addEventListener("click", function () {
        let titulo = this.querySelector("h3")
        alert(`Clickeaste en ${titulo.innerText}`)
    })

    //8
    const botonSee = document.querySelector("#SeeSome");

    let parrafo2 = document.querySelector("#azarColorP");

    botonSee.addEventListener("mouseover", function () {
        parrafo2.style.background = `${colorAlAzar()}`
    })

    botonSee.addEventListener("mouseout", function () {
        parrafo2.style.background = "#888"
    })

    //9
    const lechuza = document.querySelector("#lechuza")

    function fiveSeconds() {
        return alert("Y el futuro ya llegó!")
    }

    lechuza.addEventListener("click", function () {
        alert("Preparate para el futuro…")
        setTimeout(fiveSeconds, 5000);
    })

    //10 y 11
    let tecla = function () {
        return console.log(KeyboardEvent.code)
    };

    // let presionTecla = addEventListener("keydown", function(e){
    //     // let tecla = e.key;
    //     // if (tecla === " "){
    //     //     alert("Ey, tocaste la barra!")
    //     // }else{
    //     // alert("Ey, tocaste el teclado!")
    //     // }
    //     alert("Ey, tocaste el teclado!")
    // })

    //12
    const campoEmail = document.querySelector("#emailCampo");

    campoEmail.addEventListener("keydown", function (e) {
        let tecla = e.key;
        if (tecla === " ") {
            alert("Ey, tocaste la barra!")
            e.preventDefault()
        }
    })

    //13
    let estadoSecreto = 0;

    addEventListener("keydown", function(e){
        let tecla = e.key;
        if (tecla === "s" && estadoSecreto === 0){
            estadoSecreto = 1;
            console.log(estadoSecreto);
        }else if (tecla === "e" && estadoSecreto === 1){
            estadoSecreto = 2;
            console.log(estadoSecreto);
        }else if (tecla === "c" && estadoSecreto === 2){
            estadoSecreto = 3;
            console.log(estadoSecreto)
        }else if (tecla === "r" && estadoSecreto === 3){
            estadoSecreto = 4;
            console.log(estadoSecreto);
        }else if (tecla === "e" && estadoSecreto === 4){
            estadoSecreto = 5;
            console.log(estadoSecreto);
        }else if (tecla === "t" && estadoSecreto === 5){
            estadoSecreto = 6;
            console.log(estadoSecreto)
        }else if (tecla === "o" && estadoSecreto === 6){
            estadoSecreto = 7;
        }else{
            estadoSecreto = 0;
        }
        if (estadoSecreto === 7){
            alert("SECRETO MÁGICO")
        }
    })

    //14
    let numeroGanador = Number(Math.floor(Math.random() * 6) + 1);

    console.log(numeroGanador);

    const primeraCaja = document.querySelector("#cajaUno");
    const segundaCaja = document.querySelector("#cajaDos");
    const terceraCaja = document.querySelector("#cajaTres");
    const cuartaCaja = document.querySelector("#cajaCuatro");
    const quintaCaja = document.querySelector("#cajaCinco");
    const sextaCaja = document.querySelector("#cajaSeis");

    primeraCaja.addEventListener("click", function () {
        let numeroCaja = this.querySelector("h3")
        if (numeroGanador === parseInt(numeroCaja.innerText)) {
            alert("GANASTE ESTE PRODUCTO")
        } else {
            alert("PERDISTE,SEGUI PARTICIPANDO")
        }
    })

    segundaCaja.addEventListener("click", function () {
        let numeroCaja = this.querySelector("h3")
        if (numeroGanador === parseInt(numeroCaja.innerText)) {
            alert("GANASTE ESTE PRODUCTO")
        } else {
            alert("PERDISTE, SEGUI PARTICIPANDO")
        }
    })

    terceraCaja.addEventListener("click", function () {
        let numeroCaja = this.querySelector("h3")
        if (numeroGanador === parseInt(numeroCaja.innerText)) {
            alert("GANASTE ESTE PRODUCTO")
        } else {
            alert("PERDISTE, SEGUI PARTICIPANDO")
        }
    })

    cuartaCaja.addEventListener("click", function () {
        let numeroCaja = this.querySelector("h3")
        if (numeroGanador === parseInt(numeroCaja.innerText)) {
            alert("GANASTE ESTE PRODUCTO")
        } else {
            alert("PERDISTE, SEGUI PARTICIPANDO")
        }
    })

    quintaCaja.addEventListener("click", function () {
        let numeroCaja = this.querySelector("h3")
        if (numeroGanador === parseInt(numeroCaja.innerText)) {
            alert("GANASTE ESTE PRODUCTO")
        } else {
            alert("PERDISTE, SEGUI PARTICIPANDO")
        }
    })

    sextaCaja.addEventListener("click", function () {
        let numeroCaja = this.querySelector("h3")
        if (numeroGanador === parseInt(numeroCaja.innerText)) {
            alert("GANASTE ESTE PRODUCTO")
        } else {
            alert("PERDISTE, SEGUI PARTICIPANDO")
        }
    })

})