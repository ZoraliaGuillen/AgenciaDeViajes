let navViajes = document.getElementsByClassName("navLink")
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
let filtroRegion = document.getElementById("ard-container-trips-by-region")
var searchContainer = document.getElementById("searchContainer")   
let inputSearch = document.getElementById("inputSearch")
let search = ""
let checkedCheckboxes = []
let arrayAFiltrar = []
let ulNombreViajes = document.getElementById("viajes")
let viajes

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
   // imprimir()

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
            subscriptionsTrips.style.display = "none"
            newslatter.style.display = "none"
            allTrips.style.display = "flex"
            contact.style.display = "none"
            blog.style.display = "none"
            arrayAFiltrar = viajesArgentina
            inputSearch.value = ""
            checkedCheckboxes =[]
            eventsCategories(viajes)
            console.log("entre a ViajesArgentina")
            pintarHTML(viajes)
            searchContainer.style.display = "flex"
            ulNombreViajes.style.display ="flex"
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
            arrayAFiltrar = norte
            inputSearch.value = ""
            checkedCheckboxes =[]
            eventsCategories(norte)
            console.log("entre a norte")
            pintarHTML(norte)
            searchContainer.style.display = "flex"
            ulNombreViajes.style.display ="flex"
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
            arrayAFiltrar = centro
            inputSearch.value = ""
            checkedCheckboxes =[]
            eventsCategories(centro)
            console.log("entre a centro")
            pintarHTML(centro)
            searchContainer.style.display = "flex"
            ulNombreViajes.style.display ="flex"
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
            checkboxListener(sur)
            arrayAFiltrar= sur
            console.log("entre a sur")            
            pintarHTML(sur)
            searchContainer.style.display = "flex"
            ulNombreViajes.style.display ="flex"
            eventsCategories(sur)
            break;
        case "contactpage":
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
            searchContainer.style.display = "none"
            ulNombreViajes.style.display ="noce"
            break;
        case "blogpage":
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
            searchContainer.style.display = "none"
            ulNombreViajes.style.display ="none"
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
            searchContainer.style.display = "flex"
            arrayAFiltrar= viajes
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
            <div class="position">
                <h3 class="product-name">${array[i].Ciudad}</h3>
                <button><a href="./Html/Details.html?=id${array[i].Id}">VER DETALLE</a></button>
                </div>
                <p>Lugares a Visitar:</p>
                <p>Centro Cívico Bariloche, Cerro Campanario - Cerro Catedral, Teleférico Cerro Otto - Parque
                    Nacional Nahuel Huapi.</p>
                <p class="product-price">Precio por Noche/Persona: $${array[i].Precio}</p>
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
        case "contactpage": imprimir("contactpage")
            console.log("Entre a contacto")
            break;
        case "blogpage": imprimir("blogpage")
            console.log("Entre a blog")
            break;
        default: imprimir("inicio")
            console.log("Entre a inicio")
    }

}

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


//FILTROS COMBINADOS

inputSearch.addEventListener("keyup", function (viajes) {
    var datoInput = viajes.target.value
    search = datoInput.trim().toLowerCase()
    filtrosCombinados()
})

//Creación dinámica de los checbox
function eventsCategories(array) {
    let Provincia = array.map(viajes => viajes.Provincia)
    console.log('imprimir provincia===> ', Provincia)
    let unica = new Set(Provincia)
    console.log('Variable unica ==> ', unica)
    let lastCategories = [...unica]
    console.log('variable lastCategorias ==> ', lastCategories)
    let categoriasViajes = ""
    lastCategories.map(Provincia =>
        categoriasViajes +=
        `
        <div class="category" id="category">
        <label><input type="checkbox" value="${Provincia}">${Provincia}</label>
    </div>
    `
    )
    document.getElementById("checkcategories").innerHTML = categoriasViajes
    checkboxListener()
}


function checkboxListener() {
    var checkboxs = document.querySelectorAll('input[type=checkbox]');
    for (i = 0; i < checkboxs.length; i++) {
        checkboxs[i].addEventListener("change", function () {
            checkedCheckboxes = []
            for (i = 0; i < checkboxs.length; i++) {
                if (checkboxs[i].checked) {
                    checkedCheckboxes.push(checkboxs[i].value)
                }
            }
            console.log(checkedCheckboxes);
            filtrosCombinados()
        })
    }
}

function filtrosCombinados() {
    var filtrado = []
    if (search !== "" && checkedCheckboxes.length > 0) {
        checkedCheckboxes.map(Provincia => filtrado.push(...arrayAFiltrar.filter(viajes =>
            viajes.name.toLowerCase().includes(search) && viajes.Provincia === Provincia)
        ))
    }
    else if (search !== "" && checkedCheckboxes.length == 0) {
        filtrado = arrayAFiltrar.filter(viajes => viajes.name.toLowerCase().includes(search))
    }
    else if (search === "" && checkedCheckboxes.length > 0) {
        checkedCheckboxes.map(Provincia =>
            filtrado.push(...arrayAFiltrar.filter(viajes => viajes.Provincia === Provincia))
        )
    }
    else {
        filtrado = arrayAFiltrar
    }
    filtrado.length > 0 ? 
    showHTML(filtrado) :
    document.getElementById("viajes").innerHTML=""
    ulNombreViajes.innerHTML = `<h1 class="ceroResult"> No se encontraron viajes para tu búsqueda </h1>`
}

