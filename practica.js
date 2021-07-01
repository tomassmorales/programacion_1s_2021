window.addEventListener("load", function(){
	//let nombre = prompt("¿Cual es tu nombre?");
	//let edad = parseInt(prompt("¿Cual es tu edad?"));
	const apellido = "morales";

	//alert("¿Desea seguir?");

	//let mensaje = `mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;

	//console.log(mensaje);

	let canciones = ["bla", "blaa", "blabla"];

	console.log(canciones.length);
	canciones.pop();
	console.log(canciones.push("babla"));
	console.log(canciones.indexOf("bla"));
	canciones.splice(0,1);

	if(canciones.includes("babla")){
		console.log("Se agrego");
	}else{
		console.log("No se agrego");
	}

	function suma (a,b){
		return a+b;
	}

	console.log(suma(5,5));

	let objeto = {
		nombre: "tomas",
		edad: 20,
		saludo: function() {
			let nombre = this.nombre;
			let edad = this.edad;
		        return `hola ${nombre} de ${edad} años`;
		}
	}

	let saludo = objeto.saludo();
	console.log(saludo);

	for(let i = 0; i < canciones.length; i++){
		let mensaje = `Recorriendo ${canciones[i]}`;
		console.log(mensaje);
	}

	let numero = [0,1,2,3,4,5,6,7,8,9,10];

	for(let i = 0; i<11;i++){
		let tabla = numero[i]*2;
		console.log(tabla);
	}

	let mal = 10<5;
	console.log(mal);

	let divHola = document.querySelector(".ejemplo");
	let divs = document.querySelectorAll("div");
	console.log(document);
	console.log(divHola);

	for(let i = 0; i < divs.length; i++){
		let div = divs[i];
		div.classList.add("ejemplo");
	}

	divHola.addEventListener("click", function(){
		alert("Holaa");
	})

	console.log(location);

	let queryStringObj = new URLSearchParams(location.search);
	let numeroId = queryStringObj.get(`id`);

	console.log(numeroId);


	localStorage.setItem("nombre", "tomas");

	localStorage.getItem("nombre");

	localStorage.removeItem("nombre");

	console.log(localStorage);
	console.log(sessionStorage);
})