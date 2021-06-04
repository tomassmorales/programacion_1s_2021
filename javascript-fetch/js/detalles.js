window.addEventListener("load", function () {

    let informacionGif = document.querySelector(`#info`)

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let seleccionado = queryStringObj.get(`id`);

    let favoritos = [];
    let recuperoStorage = localStorage.getItem(`favoritos`);

    //Si hay elementos dentro lo pasamos a JSON para 
    if (recuperoStorage !== null) {
        favoritos = JSON.parse(recuperoStorage);
    }

    console.log(seleccionado);

    fetch(`https://api.giphy.com/v1/gifs/${seleccionado}?api_key=wsJgj29OIKytTFMhSBprXKJIpvG9UKeE`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let gifSelec = data.data;
            console.log(gifSelec);
            let id = gifSelec.id;
            let tituloGif = gifSelec.title;
            let urlGif = gifSelec.images.downsized_large.url;
            let username = gifSelec.username;

            if (username == "") {
                informacionGif.innerHTML += `
            <h1>${tituloGif}</h1>
            <h2>Sin nombre de usuario</h2>
            <img src="${urlGif}" alt="${tituloGif}">
            `
            } else {
                informacionGif.innerHTML += `
            <h1>${tituloGif}</h1>
            <h2>${username}</h2>
            <img src="${urlGif}" alt="${tituloGif}">
            `
            }

            //Si el id de este gif se incluye en el array mostramos el boton de quitar
            //Si no esta mostramos el de agregar

            let sacarFav = document.querySelector(`#sacarFav`);
            let agregarFav = document.querySelector(`#fav`)

            if (favoritos.includes(id)) {
                agregarFav.style.display = "none";
                sacarFav.addEventListener("click", function (e) {
                    e.preventDefault();
                    let gifEliminar = favoritos.indexOf(`${id}`);
                    favoritos.splice(gifEliminar, 1);
                    agregarFav.style.display = "inline";
                    sacarFav.style.display = "none";
                    console.log(favoritos);

                    console.log(favoritos);
                    let stringFavs = JSON.stringify(favoritos);
                    console.log(stringFavs);
                    localStorage.setItem(`favoritos`, stringFavs);
                    console.log(recuperoStorage);
                })
            } else {
                sacarFav.style.display = "none";
                agregarFav.addEventListener("click", function (e) {
                    e.preventDefault();
                    favoritos.push(`${id}`);
                    console.log(favoritos);
                    sacarFav.style.display = "inline";
                    agregarFav.style.display = "none";

                    console.log(favoritos);
                    let stringFavs = JSON.stringify(favoritos);
                    console.log(stringFavs);
                    localStorage.setItem(`favoritos`, stringFavs);
                    console.log(recuperoStorage);
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        })

})