window.addEventListener("load", function(){

    let recuperoFavoritos = localStorage.getItem(`favoritos`);
    console.log(recuperoFavoritos);
    let favoritosRecuperados = JSON.parse(recuperoFavoritos);
    console.log(favoritosRecuperados);

    let seccionFav = document.querySelector(`.favoritos`);

    if (favoritosRecuperados.length === 0 ){
        seccionFav.innerHTML += `
        <h1>No tenes una lista de favoritos</h1>
        `
    }else{

    for (let i = 0; i < favoritosRecuperados.length; i++){
        let idFavoritos = favoritosRecuperados[i];
        fetch(`https://api.giphy.com/v1/gifs/${idFavoritos}?api_key=wsJgj29OIKytTFMhSBprXKJIpvG9UKeE`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let gif = data.data;
            let gifId = gif.id;
            let gifNombre = gif.title;
            let gifUrl = gif.images.downsized_large.url;
            seccionFav.innerHTML += `
            <h1><a href="../javascript-fetch/detalle.html?id=${gifId}">${gifNombre}</a></h1>
            <img src="${gifUrl}" alt="${gifNombre}">
            `
        })
        .catch(function(error){
            console.log(error);
        })
    }
}


})