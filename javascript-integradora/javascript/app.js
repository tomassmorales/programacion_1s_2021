let pregIniciar = confirm("¿Quieres iniciar?");

let integrantesFamilia;

if (pregIniciar === false) {
    alert("Gracias por haber venido");
    window.location.href = "https://netflix.com"
} else {
    integrantesFamilia = Number(prompt("Numero de integrantes en tu familia"))
}

console.log(typeof integrantesFamilia);
console.log(integrantesFamilia);

let familia = [];

if (typeof integrantesFamilia === "number" && integrantesFamilia > 2 && pregIniciar === true) {
    alert("Muy bien");
    for (let i = 0; i < integrantesFamilia; i++) {
        let nombreInt = prompt(`Nombre de integrante numero ${i+1}`);
        let gastoInt = Number(prompt(`Gastos de integrante ${i+1}`));
        let persona = {
            nombre: nombreInt,
            gasto: gastoInt
        }
        familia.push(persona);
    }
    let sumaGastos = 0;

    for (let i = 0; i < familia.length; i++) {
        sumaGastos = sumaGastos + familia[i].gasto;
    };

    console.log(`Los gastos diarios totales son $${sumaGastos}`);

    if (sumaGastos > 1000) {
        alert("Debemos pedir un prestamo")
    } else if (sumaGastos < 500) {
        alert("¡Festejamos!")
    } else {
        alert("El gasto está bien")
    };

    function promedio(number) {
        return  number / familia.length
    };

    console.log( `El promedio de gasto por integrante es $${promedio(sumaGastos)}`);

} else if (pregIniciar === true && integrantesFamilia <= 2) {
    alert("El numero tiene que ser mayor a 2 o un número");
    window.location.reload();
}


for (let i = 0; i < familia.length; i++) {
    if (familia[i].nombre === "") {
        alert("El nombre no puede estar vacio");
        window.location.reload();
    } else {
        alert(`El nombre de ${familia[i].nombre} fue establecido`)
    }
}
for (let i = 0; i < familia.length; i++) {
    if (isNaN(familia[i].gasto)) {
        alert(`Los gastos de ${familia[i].nombre} no son numeros`);
        window.location.reload();
    } else if (familia[i].gasto === 0) {
        alert(`Los gastos de ${familia[i].nombre} estan vacios`);
        window.location.reload();
    } else {
        alert(`Los gastos de ${familia[i].nombre} fueron establecidos`)
    }
}

console.log(familia);

for (let i = 0; i < familia.length; i++) {
    console.log(familia[i].nombre);
    console.log(familia[i].gasto);
}

// let sumaGastos = 0;

// for (let i = 0; i < familia.length; i++){
//     sumaGastos = sumaGastos + familia[i].gasto;  
// }

// console.log(sumaGastos);

// if (sumaGastos > 1000){
//     alert("Debemos pedir un prestamo")
// } else if (sumaGastos < 500){
//     alert("¡Festejamos!")
// }else {
//     alert("El gasto está bien")
// }

// function promedio (number) {
//     return number/familia.length
// }

// console.log(promedio(sumaGastos));