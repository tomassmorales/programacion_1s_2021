//Bucles//

//contador de 1 a 10
for (let i=0; i<10; i++) {
    console.log(`Dando la vuelta numero ${i + 1}`);
}

//recorriendo o recuperando datos de un array

let series = [`The Office`, `Breaking Bad`, `House Of Cards`]

for (i=0; i<series.length;i++){
   //console.log(series[i])
   //Para darle forma de lista:
   console.log(`${i+1} - ${series[i]}`)
}

//Práctica

//1
console.log("Comienza práctica de bucles")

for(let i = 0; i<5; i++){
    console.log(`Practicando con el bucle for`)
}

for (let i = 0; i<10 ; i++ ) {
    console.log(`La variable i tiene el valor ${i + 1}`);
}

for (let i = 0; i<11 ; i=i+2){
   console.log (`Multiplos de 2:  ${i}`);
}

for (let i = 0; i<51 ; i=i+5){
    console.log (`Multiplos de 5: ${i}`);
 }


for (let i = 100; i>-1; i--){
    console.log (`NUMERO ${i}`);
}
//2
let numeroBase= 2;
let resultados= [];

for (let i=0; i<11; i++){
resultados.push(i*numeroBase)
}

console.log(resultados);

//3
let ganancias = [1,2,3,4,5,-1,-2,-3,-4,-4];
let contador = 0;
for(let i=0; i<ganancias.length; i++){
 contador = contador + ganancias[i]
}

console.log(contador)

//4
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ]
    
for (let i=0 ; i<healingIsDifficult.length; i++) {
     console.log(`${i+1} ${healingIsDifficult[i]}`)
}

//5
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0; i<got.length; i++) {
    console.log(`Hola soy ${got[i].nombre} ${got[i].apellido} criatura viajera!`)
}

for (let i=0; i<got.length; i++) {
    console.log(`Hola soy ${got[i].nombre} ${got[i].apellido} de la ciudad ${got[i].ciudad}!`)
}