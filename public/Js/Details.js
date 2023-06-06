
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

let viajesDetalles = []

async function infoViajesDetalles() {

    const viajerisimo = firebase.firestore().collection("viajes"); 
   
    let dataApiDetalles=[]
    await viajerisimo.get()
    .then((results) => {
   
     const data = results.docs.map((doc) => ({
        id: doc.id,
       ...doc.data(),
      }));
     dataApiDetalles.push(...data)
     viajesDetalles = dataApiDetalles
     console.log(viajesDetalles)
   
  })
  imprimirDetalles(dataApiDetalles) 
}

infoViajesDetalles()

async function imprimirDetalles(viajes) {
console.log(viajes)
    let id = location.search.split("?=id")
    console.log(id)
    let selectId = id[1]
    console.log(selectId)
    let detalles = []
    
    for (var i = 0; i < viajes.length; i++) {

        if (viajes[i].Id==selectId) {
            await detalles.push(viajes[i])
        }
    
    }
    console.log(detalles)

    var tarjetasViajesDetalles = document.getElementById("all-trips-details")
    tarjetasViajesDetalles.innerHTML = 

    `
    <div class="card">
        <img src="${detalles[0].Imagen}" alt="">
    <div class="position">
        <h3 class="product-name">${detalles[0].Ciudad}</h3>
        <h4 class="product-pro">${detalles[0].Provincia}</h3>
        </div>
        <p class="place">Lugares a Visitar: ${detalles[0].LugaresAVisitar}</p>
        <p class="product-price">Precio por Noche/Persona: <span>$${detalles[0].Precio}</span></p>
    </div>
    `
}

