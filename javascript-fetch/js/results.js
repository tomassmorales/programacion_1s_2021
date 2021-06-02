window.addEventListener("load", function(){

    let seccionResultados = document.querySelector(".search-results");

    let queryString = location.search;

    let queryStringObj = new URLSearchParams(queryString);

    let busqueda = queryStringObj.get(`q`);

    console.log(busqueda);

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=R3eF22FOKmH2tZCWRO86VlPu7ZYOOxnN&q=${busqueda}&limit=10`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);       
        let resultados = data.data;
        if (busqueda === ""){
            seccionResultados.innerHTML += `
            <h1>No hay un parametro de busqueda</h1>
            `
        }else if (resultados.length === 0){
            seccionResultados.innerHTML += `
            <h1>No hay resultados para "${busqueda}"</h1>
            `
        }else {
        for(let i = 0; i < resultados.length; i++){
            let nombreGif = resultados[i].title;
            let gif = resultados[i].images.original.url;
            let gifId = resultados[i].id;
            seccionResultados.innerHTML += `
            <h1><a href="../javascript-fetch/detalle.html?id=${gifId}">${nombreGif}</a></h1>
            <img src="${gif}" alt="${nombreGif}">
            `
        }}
    })
    .catch(function(error){
        console.log(error);
    })

})