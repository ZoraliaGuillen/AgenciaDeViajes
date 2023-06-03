let viajes;
let navViajes = document.getElementsByClassName("navLink");
let tarjetasViajes = document.getElementById("card-container-all-trips")
let home = document.getElementById("home")
let whyUs = document.getElementById("why-us")
let recommendedTrips = document.getElementById("recommended-trips")
let tripsByRegion = document.getElementById("trips-by-region")
let tripsByProvince = document.getElementById("trips-by-province")
let subscriptionsTrips = document.getElementById("subscriptions-trips")
let newslatter = document.getElementById("newslatter")
let allTrips = document.getElementById("all-trips")
let contact = document.getElementById("contact")
let blog = document.getElementById("blog")

function infoViajes() {

     const viajerisimo = firebase.firestore().collection("viajes"); 
    
     let dataApi=[]
     viajerisimo.get()
     .then((results) => {
    
      const data = results.docs.map((doc) => ({
         id: doc.id,
        ...doc.data(),
       }));
      dataApi.push(...data)
      viajes = dataApi
    
    console.log ('guasfdiuasgfkjghfkj')
    console.log("viajes",dataApi);
   })
}

   infoViajes()

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

//NAV PÁGINAS

for (var i = 0; i < navViajes.length; i++) {
    var element = navViajes[i];
    element.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}


async function imprimir(id) {
    console.log(id)
    switch (id) {

        case "viajesArgentina":
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            tripsByProvince.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            console.log("entre a ViajesArgentina")
            pintarHTML(viajes)
            break;
        case "norte":
            let norte = viajes.filter(viajes => viajes.Region == "Norte");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            tripsByProvince.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            console.log("entre a norte")
            pintarHTML(norte)
            break;
        case "centro":
            let centro = viajes.filter(viajes => viajes.Region == "Centro");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            tripsByProvince.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            console.log("entre a centro")
            pintarHTML(centro)
            break;
        case "sur":
            let sur = viajes.filter(viajes => viajes.Region == "Sur");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            tripsByProvince.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            console.log("entre a sur")            
            pintarHTML(sur)
            break;
        case "contacto":
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            tripsByProvince.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "none"
            contact.style.display = "contact"
            blog.style.display = "none"
            console.log("entre a contacto")
            break;
        case "blog":
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            tripsByProvince.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "none"
            contact.style.display = "none"
            blog.style.display = "flex"
            console.log("entre a blog")
            break;
        default:
            home.style.display = "flex"
            whyUs.style.display = "flex"
            recommendedTrips.style.display = "flex"
            tripsByRegion.style.display = "flex"
            tripsByProvince.style.display = "flex"
            subscriptionsTrips.style.display = "flex"
            newslatter.style.display = "flex"
            allTrips.style.display = "none"
            contact.style.display = "none"
            blog.style.display = "none"
            console.log("entre a inicio")
            break;
    }
}

//TEMPLATE TARJETAS

function pintarHTML(array) {
    let html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `
            <div class="card">
                    <img src="${array[i].Imagen}" alt="">
                    <h3>${array[i].Ciudad}</h3>
                    <p>Lugares a Visitar:</p>
                    <p>Centro Cívico Bariloche, Cerro Campanario - Cerro Catedral, Teleférico Cerro Otto - Parque
                        Nacional Nahuel Huapi.</p>
                    <div>
                        <p>Precio por Noche/Persona: $</p>
                        <button>Ver Detalles</button>
                    </div>
                </div>
        `
    }

    tarjetasViajes.innerHTML = html;

}

// NAV PÁGINA DETALLES

// function rutas() {

//     var page = location.search.split("?page=");

//     console.log(page[1]);

//     switch (page[1]) {

//         case "viajesArgentina": 
//             imprimir("viajesArgentina")
//             console.log("Entre a viajesArgentina")
//             break;
//         case "norte": imprimir("norte")
//             console.log("Entre a norte")
//             break;
//         case "centro": imprimir("centro")
//             console.log("Entre a centro")
//             break;
//         case "sur": imprimir("sur")
//             console.log("Entre a sur")
//             break;
//         case "contacto": imprimir("contacto")
//             console.log("Entre a contacto")
//             break;
//         case "blog": imprimir("blog")
//             console.log("Entre a blog")
//             break;
//         default: imprimir("inicio")
//             console.log("Entre a inicio")
//     }

// }

$( document ).ready(function() {
    $('#myModal').modal('toggle')
});