const videosSubidos = [new Video("Como hackear cualquier red WIFI con Fluxion.\n Video eliminado 2 veces\nMax views:20000")]



nombres = []
let video = (nombre)=>{
    nombres.push(nombre.value);
    console.log(nombre.value);
    if(nombre.value == "Fluxion"){
        window.location.href = "wifi.html"
    }
}

let addInfo = (video) =>{
    let descripcion = document.getElementById("lista-egresos")
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${video.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor"></div>
        <div class="elemento_eliminar">
        
            <button class = 'elemento_eliminar--btn'>
                <ion-icon name="close-circle"
                onclick= 'eliminarIngreso()'></ion-icon>

            </button>
        </div>
    </div>
    </div>
    `
    console.log("HOLA")
    descripcion.innerHTML = ingresoHTML;
}



let cargarCabecero = ()=>{
    /*definir elementos que se sustituyen en html
    let presupuesto = totalIngresos()-totalEgresos();//Total presupuesto
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    */
}


//Para darle formato a numeros a moneda
const formatoMoneda = (valor) =>{
    return valor.toLocaleString('en-US',{style: 'currency',currency:'USD',minimumFractionDigits:2});
}


const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style: 'percent',minimumFractionDigits:2})
}

//document.getElementById('calculos').innerHTML = 430/791
