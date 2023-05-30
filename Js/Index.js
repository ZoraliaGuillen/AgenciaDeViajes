let viajesDetalles;

async function getData() {
    let datosApi
    await fetch("/Js/Viajes.JSON")
        .then(response => response.json())
        .then(json => datosApi=json)

        Viajes = datosApi.Viajes;

        console.log(viajesDetalles)
}

getData()