let viajes;

async function infoViajes() {

     const viajerisimo = firebase.firestore().collection("viajes"); 
    
     let dataApi=[]
     await viajerisimo.get()
     .then((results) => {
    
      const data = results.docs.map((doc) => ({
         id: doc.id,
        ...doc.data(),
       }));
      dataApi.push(...data)
      viajes = dataApi
    
    console.log("viajes",dataApi);

    rutas()
    imprimir()

   })
}

   infoViajes()

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
let filtroRegion = document.getElementById("card-container-trips-by-region")
   
let inputSearch = document.getElementById("inputSearch")
let search = ""
let checkedCheckboxes = []
let arrayFiltro = []

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
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            arrayFiltro = viajesArgentina
            inputSearch.value = ""
            checkedCheckboxes =[]
            eventsCategories = (viajesArgentina)
            console.log("entre a ViajesArgentina")
            pintarHTML(viajes)
            break;
        case "norte":
            let norte = viajes.filter(viajes => viajes.Region == "Norte");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            inputSearch.value = ""
            checkboxListener = (norte)
            arrayFiltro = norte
            console.log("entre a norte")
            pintarHTML(norte)
            break;
        case "centro":
            let centro = viajes.filter(viajes => viajes.Region == "Centro");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            inputSearch.value = ""
            checkboxListener = (centro)
            arrayFiltro = centro
            console.log("entre a centro")
            pintarHTML(centro)
            break;
        case "sur":
            let sur = viajes.filter(viajes => viajes.Region == "Sur");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            inputSearch.value = ""
            checkboxListener = (sur)
            arrayFiltro = sur
            console.log("entre a sur")            
            pintarHTML(sur)
            break;
        case "contacto":
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
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
            subscriptionsTrips.style.display = "flex"
            newslatter.style.display = "flex"
            allTrips.style.display = "none"
            contact.style.display = "none"
            blog.style.display = "none"
            console.log("entre a inicio")
            break;
    }
}

let selectCity;
let cantidadPasajeros = 1
select = document.getElementById('city')
select.addEventListener("change", function(e){
   selectCity = e.target.value
})

let inputNumber = document.getElementById("inputNumber")
inputNumber.addEventListener("change", function(e){
 cantidadPasajeros = e.target.value
})

let botonBuscar = document.getElementById("botonBuscar")
botonBuscar.addEventListener("click", function(e){
    e.preventDefault()
    if(selectCity && cantidadPasajeros > 0){
        imprimirDos(selectCity)
    }
    else{
        if(!selectCity && cantidadPasajeros > 0){
        alert("Debe ingresar destino")
        }
        else if(selectCity && cantidadPasajeros <= 0){
            alert("Debe ingresar cantidad de pasajeros mayor a cero")
        }
        else if(!selectCity && cantidadPasajeros <=0){
            alert("Debe ingresar destino y cantidad de pasajeros mayor a cero")
        }
    }
})

//TEMPLATE TARJETAS

function pintarHTML(array) {
    let html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `
            <div class="card">
                <img src="${array[i].Imagen}" alt="">
            <div class="position">
                <h3 class="product-name">${array[i].Ciudad}</h3>
                <button><a href="./Html/Details.html?=id${array[i].Id}">VER DETALLE</a></button>
                </div>
                <p>Lugares a Visitar:</p>
                <p>Centro Cívico Bariloche, Cerro Campanario - Cerro Catedral, Teleférico Cerro Otto - Parque
                    Nacional Nahuel Huapi.</p>
                <p class="product-price">Precio por Noche/Persona: $${array[i].Precio*cantidadPasajeros}</p>
                <button class="btn-add-cart" id="btn-add-cart">Agregar al Carrito</button>
            </div>
        `
    }

    tarjetasViajes.innerHTML = html;

}

// NAV PÁGINA DETALLES

function rutas() {

    var page = location.search.split("?page=");
    console.log(page);

    switch (page[1]) {

        case "viajesArgentina": 
            imprimir("viajesArgentina")
            console.log("Entre a viajesArgentina")
            break;
        case "norte": imprimir("norte")
            console.log("Entre a norte")
            break;
        case "centro": imprimir("centro")
            console.log("Entre a centro")
            break;
        case "sur": imprimir("sur")
            console.log("Entre a sur")
            break;
        case "contacto": imprimir("contacto")
            console.log("Entre a contacto")
            break;
        case "blog": imprimir("blog")
            console.log("Entre a blog")
            break;
        default: imprimir("inicio")
            console.log("Entre a inicio")
    }

}

async function imprimirDos(value) {
    console.log(value)
    switch (value) {

        case "Bariloche":
            let bariloche = viajes.filter(viajes => viajes.Ciudad == "Bariloche");
            home.style.display = "none"
            whyUs.style.display = "none"
            recommendedTrips.style.display = "none"
            tripsByRegion.style.display = "none"
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            arrayFiltro = viajesArgentina
            inputSearch.value = ""
            checkedCheckboxes =[]
            pintarHTML(bariloche)
            break;
            
            default:
                let calafate = viajes.filter(viajes => viajes.Ciudad == "Calafate");
                home.style.display = "none"
                whyUs.style.display = "none"
                recommendedTrips.style.display = "none"
                tripsByRegion.style.display = "none"
                subscriptionsTrips.style.display = "none"
                newslatter.style.display = "none"
                allTrips.style.display = "flex"
                contact.style.display = "none"
                blog.style.display = "none"
                arrayFiltro = viajesArgentina
                inputSearch.value = ""
                checkedCheckboxes =[]
                pintarHTML(calafate)
        }
    }

//FILTRO REGION

// for (let i = 0; i < filtroRegion.length; i++) {
//     let elementosRegion = filtroRegion[i];
//     elementosRegion.addEventListener("click", function (e) {
//         if (e.target.parentElement.id == "norte") {
//             imprimir("norte")
//         }
//         else if (e.target.parentElement.id == "centro") {
//             imprimir("centro")
//         }
//         else {
//             imprimir("sur")
//         }
//     })

// }

//CARRITO DE COMPRAS

const btnCart = document.querySelector('.fa-cart-shopping');
const cardContainerCartProducts = document.querySelector(".card-container-shopping-cart")

btnCart.addEventListener('click', () => {
cardContainerCartProducts.classList.toggle('hidden-cart-shopping');
})

const rowShoppingCart = document.querySelector('.row-shopping-cart');
const cardShoppingCart = document.querySelector('.cartProduct');
const cardContainerAllTrips = document.querySelector(".card-container-all-trips")
let allProducts = []
const totalValue = document.querySelector('.total')
const totalCountProducts = document.querySelector('.products-count-shopping-cart')
const allProductDelete = document.querySelector('.all-product-delete')
const cartEmpty = document.querySelector('.cart-empty')
const cartTotal = document.querySelector('.cart-total')
const pay = document.querySelector('.pay')

cardContainerAllTrips.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;
    
        const infoProduct = {
            quantity: 1,
            name: product.querySelector('.product-name').textContent,
            price: product.querySelector('.product-price').textContent,
        }

        const exits = allProducts.some(product => product.name == infoProduct.name)
       
        if(exits){
            const products = allProducts.map(product =>{
                if(product.name === infoProduct.name){
                    product.quantity++;
                    return product
                } else{
                    return product
                }
            })
            allProducts = [...products]
        } else{
            allProducts = [...allProducts,infoProduct]
        }

        
        console.log(infoProduct)
        showHTML()
    }
})

rowShoppingCart.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(title);
		showHTML();
	}
});

const showHTML = () => {
    if (!allProducts.length) {
        allProductDelete.classList.add('hidden');
		cartTotal.classList.add('hidden');
		cartEmpty.classList.add('hidden');
	} else {
        allProductDelete.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
		cartEmpty.classList.remove('hidden');
	}

    //cleanHTML
    rowShoppingCart.innerHTML = ""

    let total = 0
    let totalOfProducts = 0

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('card-shopping-cart')

        containerProduct.innerHTML=
            `
                <div class="product-shopping-cart">
                    <div class="row-product-shopping-cart">
                            <span class="product-count">${product.quantity}</span>
                                <p>${product.name}</p>
                                <span>${product.price}</span>
                     </div>
                </div>
            `;
    
    rowShoppingCart.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(27))
    totalOfProducts = totalOfProducts + product.quantity
    
    });

    totalValue.innerText = `$${total}`
    totalCountProducts.innerText = totalOfProducts
};

const btnClearAll = document.querySelector('.all-product-delete')
btnClearAll.addEventListener('click', () => {
	allProducts = [];
	showHTML()
})

//FILTROS COMBINADOS

inputSearch.addEventListener("keyup", function (viajes) {
    const datoInput = viajes.target.value
    search = datoInput.trim().toLowerCase()
    console.log(search)
})


// function eventsCategories(array) {
    
//     console.log(Ciudades)
//     let unica = new Set(categories)
//     let lastCategories = [...unica]
//     let categoriasEventos = ""
//     lastCategories.map(Ciudad =>
//       categoriasEventos +=
//       `
//       <label><input type="checkbox" value="${Ciudad}"> ${Ciudad}</label>
//       `
//     )
//     document.getElementById("category").innerHTML = categoriasEventos
//     checkboxListener()
//   }

// function eventsCategories() {
//     let categoriasEventos = 
//       `
//       <label><input type="checkbox" value="Carrera">Carrera</label>
//       <label><input type="checkbox" value="Concierto de Música">Concierto de Música</label>
//       <label><input type="checkbox" value="Feria de Comida">Feria de Comida</label>
//       <label><input type="checkbox" value="Fiesta de Disfraces">Fiesta de Disfraces</label>
//       <label><input type="checkbox" value="Intercambio de Libros">Intercambio de Libros</label>
//       <label><input type="checkbox" value="Salida al Museo">Salida al Museo</label>
//       <label><input type="checkbox" value="Vamos al Cine">Vamos al Cine</label>
//       `
//     document.getElementById("category").innerHTML = categoriasEventos
//     checkboxListener()
//   }

// function checkboxListener() {
//     var checkboxs = document.querySelectorAll('input[type=checkbox]');
//     for (i = 0; i < checkboxs.length; i++) {
//         checkboxs[i].addEventListener("click", function () {
//             checkedCheckboxes = []
//             for (i = 0; i < checkboxs.length; i++) {
//                 if (checkboxs[i].checked) {
//                     checkedCheckboxes.push(checkboxs[i].value)
//                 }
//             }
//             console.log(checkedCheckboxes);
//             filtrosCombinados()
//         })
//     }
// }

  
function filtrosCombinados() {
    var filtrado = []
    if (search !== "" && checkedCheckboxes.length > 0) {
      checkedCheckboxes.forEach(category => filtrado.push(...arrayFiltro.filter(evento =>
        evento.name.toLowerCase().trim().includes(search) && evento.category === category)
      ))
    }
    else if (search !== "" && checkedCheckboxes.length == 0) {
      filtrado = arrayFiltro.filter(evento => evento.name.toLowerCase().trim().includes(search))
    }
    else if (search === "" && checkedCheckboxes.length > 0) {
      checkedCheckboxes.forEach(category =>
        filtrado.push(...arrayFiltro.filter(evento => evento.category === category))
      )
    }
    else {
      filtrado = arrayFiltro
    }
    filtrado.length > 0 ?
        pintarHTML(filtrado) :
        tarjetasViajes.innerHTML = `
            <div class="ceroResultado">
            <h1 class="sinviajess" >No se encontraron viajess para tu busqueda...</h1>
            
            
            </div>
      `
      console.log(filtrado)
  }