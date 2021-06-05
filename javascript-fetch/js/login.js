window.addEventListener("load", function(){

    let botonSubmit = document.addEventListener(`button`);

    let email;

    let recupDatos = sessionStorage.getItem(`usuario`);

    if (recupDatos !== null){
        email = JSON.parse(recupDatos);
    }

    let inputEmail = document.querySelector(`#email`);

   
})