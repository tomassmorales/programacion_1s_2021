window.addEventListener("load", function(){

    //let numeroGifs = Number (prompt("¿Cuantos resultados quieres ver?"));

    let queryStringEmail = location.search;
    let emailStringObj = new URLSearchParams(queryStringEmail);
    let email = emailStringObj.get(`q`);

    console.log(email);

    let emailUsuario = JSON.stringify(email)
    sessionStorage.setItem(`usuario`, emailUsuario);

    console.log(sessionStorage.getItem(`usuario`));

    let loguearse = document.querySelector(`#log`);
    let logOut = document.querySelector(`#logOut`);

    logOut.addEventListener("click", function(){
        localStorage.clear();
        sessionStorage.clear();
    })

    if (email !== null){
        loguearse.style.display = "none";
    }else {
        logOut.style.display = "none";
    }

    let misFavs = document.querySelector(`#favo`);
    let storageFavs = localStorage.getItem(`favoritos`);
    let favsRecup = JSON.parse(storageFavs);

    if(storageFavs === null || favsRecup.length === 0) {
    misFavs.style.display = "none";
    }else {
     misFavs.style.display = "inline"; 
    }

    let tendenciasLista = document.querySelector("#trending article ul");

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=R3eF22FOKmH2tZCWRO86VlPu7ZYOOxnN&limit=5&rating=g`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let gifs = data.data;
        console.log(gifs)
        console.log(gifs[0].title);
        for (let i = 0; i < gifs.length; i++){
            let url = gifs[i].images.original.url;
            let titulo = gifs[i].title;
            let username = gifs[i].username
            let fuente = gifs[i].source;
            let id = gifs[i].id; 
            tendenciasLista.innerHTML += 
            `<li>
            <h2><a href="../javascript-fetch/detalle.html?id=${id}">${titulo}</a></h2>
            <img src="${url}" alt="${titulo}"></img>
            <p> Usuario: ${username} - fuente: <a>${fuente} </a>- id: ${id}</p>
            </li>`
        }
    })
    .catch(function(error){
        tendenciasLista.innerHTML += `<li>No se encuentra la lista</li>` 
        console.log(error);
    })

    let boton = document.querySelector("#random article button");
    let imagen = document.querySelector("#random article img");
    let tituloGif = document.querySelector("#random article h3");

    boton.addEventListener("click", function(){
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=R3eF22FOKmH2tZCWRO86VlPu7ZYOOxnN&tag=&rating=g`)
        .then (function(response){
            return response.json();
        })
        .then (function(data){
            let gifUrl = data.data.images.original.url;
            let gifTitle = data.data.title;
            imagen.src = gifUrl;
            imagen.alt = gifTitle;
            tituloGif.innerText = gifTitle
            console.log(gifsRandom);
        })
        .catch (function(error){
            console.log(error);
        })
    })


})