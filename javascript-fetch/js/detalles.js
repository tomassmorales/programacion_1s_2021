window.addEventListener("load", function(){

    let informacionGif = document.querySelector(`#info`)

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let seleccionado = queryStringObj.get(`id`);

    console.log(seleccionado);

    fetch(`https://api.giphy.com/v1/gifs/${seleccionado}?api_key=wsJgj29OIKytTFMhSBprXKJIpvG9UKeE`)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        let gifSelec = data.data;
        console.log(gifSelec);
        let tituloGif = gifSelec.title;
        let urlGif = gifSelec.images.downsized_large.url;
        let username = gifSelec.username;

        if (username == ""){
            informacionGif.innerHTML += `
            <h1>${tituloGif}</h1>
            <h2>Sin nombre de usuario</h2>
            <img src="${urlGif}" alt="${tituloGif}">
            `
        }else {
            informacionGif.innerHTML += `
            <h1>${tituloGif}</h1>
            <h2>${username}</h2>
            <img src="${urlGif}" alt="${tituloGif}">
            `
        }
    })
    .catch(function(error){
        console.log(error);
    })

})