
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

    `<div class="cardContainerDetails">
    <div class="imageCardDetails">
        <i class="fa-solid fa-heart"></i>
    </div>
    <div class="cardDetails">
        <h3 class="name">${detalles[0].Hotel}</h3>
    </div>
</div>
    `
}

