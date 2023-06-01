let viajes;

async function getData() {
    let datosApi
    await fetch("./Js/Viajes.js")
        .then(response => response.json())
        .then(json => datosApi = json)

        viajes = datosApi.viajesArgentina;

        console.log(viajes)
}

getData()

// MENU DESPLEGABLE

let nav = document.querySelector(".nav");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visibility");
})

close.addEventListener("click", () => {
    nav.classList.remove("visibility");
})

//NAV ENTRE PÁGINAS

let navViajes = document.getElementsByClassName("navLink");
let home = document.getElementsByClassName("home")
let whyUs = document.getElementsByClassName("why-us")
let recommendedTrips = document.getElementsByClassName("recommended-trips")
let tarjetasViajes = document.getElementsByClassName("card-container-all-trips");

for (let i = 0; i < navViajes.length; i++) {
    let element = navViajes[i];
    element.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}

async function imprimir(id) {

    switch (id) {

        case "viajesArgentina":
            display(viajesArgentina)
            console.log("entre a ViajesArgentina")
            break;
        case "norte":
            let norte = viajes.filter(viajes => viajes.region == "Norte");
            display(norte)
            console.log("entre a norte")
            break;
        case "norte":
            let centro = viajes.filter(viajes => viajes.region == "Centro");
            display(centro)
            console.log("entre a centro")
            break;
        case "sur":
            let sur = viajes.filter(viajes => viajes.region == "Sur");
            display(sur)
            console.log("entre a sur")
            break;
        case "contacto":
            display(contacto)
            console.log("entre a contacto")
            break;
        case "blog":
            display(blog)
            console.log("entre a blog")
            break;
        default:
            break;
    }
}

function display(array) {

    let html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `
        `
    }

    tarjetasViajes.innerHTML = html;

}
