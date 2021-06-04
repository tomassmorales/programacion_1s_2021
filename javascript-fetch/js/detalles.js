window.addEventListener("load", function () {

    let informacionGif = document.querySelector(`#info`)

    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let seleccionado = queryStringObj.get(`id`);

    let favoritos = [];
    let recuperoStorage = localStorage.getItem(`favoritos`);
    
    //Si hay elementos dentro lo pasamos a JSON para 
    if (recuperoStorage !== null){
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
            if (favoritos.includes(id)){
                informacionGif.innerHTML += `
                <a href="" class="sacarFav">Quitar de favoritos</a>
                `;
            }else {
                informacionGif.innerHTML += `
                <a href="" class="fav">Agregar a favoritos</a>
                `;
            }

            let botonAgregar = document.querySelector(`.fav`);

            botonAgregar.addEventListener("click", function(e){
                e.preventDefault();
                favoritos.push(`${id}`);
                botonAgregar.classList.remove(`fav`);
                botonAgregar.classList.add(`sacarFav`);
                botonAgregar.innerText = `Quitar de la lista`;
                console.log(favoritos);
            })

            let botonQuitar = document.querySelector(`.sacarFav`);
                botonQuitar.addEventListener ("click", function(e){
                    e.preventDefault();
                    let gifEliminar = favoritos.indexOf(`${id}`);
                    favoritos.splice(gifEliminar, 1);
                })

            let stringFavs = JSON.stringify(favoritos);
            console.log(stringFavs);
            localStorage.setItem(`favoritos`, stringFavs);
        })
        .catch(function (error) {
            console.log(error);
        })
})