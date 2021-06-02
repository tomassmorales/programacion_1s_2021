
let nombreSegundo = "Agustín";
let planetas = ["Mercurio", "Venus", "Tierra"]
let meGustaElCine = true;

console.log(nombreSegundo);

console.log(planetas);

console.log(planetas[0]);

console.log(planetas[1]);

console.log(planetas[2]);

console.log(meGustaElCine);

let nombre;
let apellido;
let edad;

nombre = "Tomás";
apellido = "Morales";
edad = 20;

let nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

let peliculas = ["Interstellar", "Pulp Fiction", "Fight Club", "Goodfellas", "Mank"];
let CantidadPelis = peliculas.length;
//printear la ultima pelicula
console.log(peliculas[CantidadPelis-1]);


let frutas = ["Banana", "Naranja", "Limon", "Manzana", "Mango"];
 
let citricos = [frutas[1], frutas[2]]; 

console.log(frutas.length);

console.log(citricos);

frutas.push("Frutilla");
frutas.push("Melon");

console.log(frutas.length);

console.log([].length);//toma el array pero no tiene length
console.log([2,  11, 17, 32, 36, 39].length); //toma al array como valido
console.log("lalalala".length); //toma como longitud todas las letras del string

console.log("Comienza ejercicio complementario");

let abuelos = ["Titi", "Ana"]

let padres;

padres = ["Mario", "Silvana"];

let hijos = ["Tomás", "Facundo", "Santino"];

let nietos;

nietos = ["José", "Pepito"];

let arbolGenealogico = [abuelos, padres, hijos, nietos];

console.log(abuelos.length);
console.log(hijos.length);
console.log(padres.length);
console.log(nietos.length);

console.log(abuelos[0]);
console.log(hijos[0]);
console.log(padres[0]);
console.log(nietos[0]);

//Funciones
console.log("Práctica de funciones");

function area (h,b) {
    return h * b
}

let areaUno = area(5,10);

console.log(areaUno);

function areaCirculo (r) {
    let pi = 3.14;

    return pi * (r**2);
}

let areaDos = areaCirculo(5);

console.log(areaDos);

function promedioNumeros (a,b,c,d,e) {

    let numeros = [a,b,c,d,e];

    let sumaNumeros = numeros[0]+numeros[1]+numeros[2]+numeros[3]+numeros[4];

    return sumaNumeros / numeros.length;

}

let promedio = promedioNumeros (8,8,9,9,10);

console.log(promedio);

let numeros = [1,2,3,4,5];

let numerosDos = [1,2,3,4,5,6,7,8,9,10]

function numerosArray (numeros) {
    return numeros.length;
}

let ArrNum = numerosArray(numerosDos);

console.log (ArrNum);

let diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];

function diaMiercoles (diasSemana) {

    //return diasSemana[2];
    
    let numerosDias = diasSemana.length;

    return diasSemana[numerosDias-5];
}

let miercoles = diaMiercoles (diasSemana);

console.log(miercoles);

function letrasPalabra (palabra = String) {
    return palabra.length;
}

let numeroLetras = letrasPalabra("Otorringolaringologo");

console.log(numeroLetras);

function pesoADolar (p) {
    
    let dolar = 150;
    
    return p / dolar
}

let pesoDolar = pesoADolar(25000);

console.log(pesoDolar);

function precioMasIva (price) {
    
    let iva = 1.21;

    return price*iva

}

let precioIva = precioMasIva(10000);

console.log(precioIva);

function mitad (n = Number) {
    return n/2
}

let nMitad = mitad(18);

console.log(nMitad);

//Calculadora Básica

function sumar (a,b) {
    return a+b
}

function restar (a,b) {
    return a-b
}

function multiplicar (a,b) {
    return a*b
}

function dividir (a,b) {
    return a/b
}
console.log("Operaciones Matemáticas");
console.log(multiplicar(2,4));
console.log(sumar(5,5));
console.log(restar(15,7));
console.log(dividir(18,2));

console.log("Ejercicio Complementario");

function anterior (numero = Number) {
    return numero - 1;
}

function triple (numero=Number) {
    return numero*3;
}
  
function anteriorDelTriple (numero = Number) {
    return anterior(triple(numero))
}

console.log(anteriorDelTriple(10));

//Objetos Literales
console.log("Práctica Objetos Literales");

let misDatos = {
    nombre: "Tomás",
    apellido: "Morales",
    dni: 42797944,
    comidaFavorita: "Lasagna",
    edad: 20,
    saludar: function() {
        return `Hola me llamo ${nombre} ${apellido} y tengo ${edad} años`;
    }
};

console.log (misDatos.saludar());

let auto = {
    marca: "Ferrari",
    modelo: "La Ferrari",
    año: 2020,
    color: "Rojo",
    posicion: 8,
    avanzar: function() {
        return this.posicion ++
    },
    retroceder: function() {
        return this.posicion --
    },
    moverse: function (numero) {
        return  this.posicion + numero;
    }
};

console.log(auto.avanzar());
console.log(auto.avanzar());
console.log(auto.retroceder());
console.log("Posición del auto");
console.log(auto.posicion);

console.log(auto.moverse(+2));

console.log("Superheroes");


let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energía: 100,
    getPoder: function(numero) {
        this.energía = this.energía -10
        console.log(this.energía)
        return this.poderes [numero];
    } 
};

let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energía: 100,
    getPoder: function(numero) {
        this.energía = this.energía -10
        console.log(this.energía)
        return this.poderes [numero];
    } 
};

let randomPoder = Math.floor(Math.random() * 3);

//prueba de numero random
console.log(randomPoder);

console.log (ironMan.getPoder(randomPoder));
console.log (hulk.getPoder(randomPoder));

