//alert,prompt, confirm

//let mensaje = "Hola mundo";
//alert(mensaje);

//let prompteo = "¿Tu nombre?"
//let nombreUsuario = prompt(prompteo)

//console.log(nombreUsuario)

//let confirmacion = "¿Es mayor de edad?"
//let mayorEdad = confirm(confirmacion);

//console.log(mayorEdad)

//condicionales

// let mensaje = "Introduce tu edad en años (+18)";
// let edadUsuario = prompt(mensaje);

// console.log(edadUsuario);

// let acceso = "";

// if (parseInt(edadUsuario)<16) {
//     acceso = "Denegado"
//     console.log(acceso)
// } else if ((parseInt(edadUsuario)>=16) && (parseInt(edadUsuario)<=18)){
//     acceso = "Puede entrar acompañado por un adulto"
//     console.log(acceso)
// } else {
//     acceso = "Acceso concedido"
//     console.log(acceso)
// }

//ejercicio del banco, consulta del banco que abre de lunes a viernes de 9 a 15 hs
//el cliente tiene que saber si en el horario y dia va a estar abierto.

// let diaSemana = prompt("¿Que día de la semana venís?");
// let horario = prompt("¿En que horario querés venir?");

// function puedoIrAlBanco(dia, horario) {
//     if (dia === "sabado" || dia === "domingo") {
//         return false;
//     } else if (horario>=9 && horario<=15){
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(puedoIrAlBanco(diaSemana,horario));

//practica

//1

// let pregunta = confirm("¿Sos culpable?")

// if (pregunta == true) {
//     alert("Irás a la cárcel");
// } else {
//     alert("Irás a casa");
// }

//2

// let preguntaNumero = "Eliga un numero del 1 al 100"
// let numeroElegido = prompt(preguntaNumero);

// let preguntaNumeroDos = "Eliga otro numero del 1 al 100"
// let numeroElegidoDos = prompt(preguntaNumeroDos);

// console.log(numeroElegidoDos)

// let resultado = parseInt(numeroElegido) + parseInt(numeroElegidoDos);

// if (numeroElegido === "" || numeroElegidoDos === ""){
//     alert("Ey, necesitamos un numero")
// } else if (numeroElegido === numeroElegidoDos){
//     alert(`Ey, escribiste el mismo numero: ${numeroElegido}`)
// }else if (resultado < 10) {
//     alert(`La suma de tus numeros es ${resultado} y es menor a 10`)
// }else if (resultado > 10 && resultado < 20){
//     alert(`Bien pasaste`)
// }else if (resultado > 20) {
//     alert(`Te zarpaste`)
// }

//3 y 4

let nombre = prompt("Ingresa tu nombre");
console.log(nombre);

let edad = prompt("Ingresa tu edad");
console.log(edad);

let fanDeportes = confirm("¿Te gustan los deportes?");
console.log(fanDeportes);

alert(`Muchas gracias ${nombre} por responder nuestras preguntas`);

let hobbies = [];
let preguntaHobbies;
for (let i=0; i<=2; i++){
    preguntaHobbies = prompt("Ingresa un Hobbie"); 
    hobbies.push(preguntaHobbies);
}

console.log(hobbies);

let usuario = {
    nombre: nombre,
    edad: edad,
    hobbies: hobbies,
    deportistaProfesional: function (edad) {
        if (fanDeportes === true && parseInt(edad) > 18){
            return alert("Si soy fan de los deportes")
        } else {
            return alert("No soy tan fan aún de los deportes")
        }
    }
}

console.log(usuario);

console.log(usuario.hobbies);

console.log(usuario.deportistaProfesional(edad));

for (let i = 0; i < hobbies.length; i++){
    console.log(`${i+1}- ${hobbies[i]}`);
}

console.log("Recorriendo el Array desde el usuario")

for (let i = 0; i < usuario.hobbies.length; i++){
    console.log(`${i+1}- ${usuario.hobbies[i]}`);
}