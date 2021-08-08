const videosSubidos = [new Video("Como hackear cualquier red WIFI con Fluxion.\n Video eliminado 2 veces\nMax views:20000")]
const descripciones = {
    "Fluxion":`<span style='font-style:bold;font-family:"Russo One",Arial'>
    
    Como hackear cualquier red WIFI con comandos [SIN FUERZA BRUTA] Kali Linux. Fluxion Clave 2020</span><br/><br/>
    <ul>
    <li>Como hackear cualquier red WIFI con Fluxion.
    <li>Video eliminado 2 veces
    <li>Max views:20000
    <ul/>`
}


let video = (nombre)=>{
    const nombres = [["Fluxion","wifi.html"],["Windows7","windows7.html"]];
    console.log("hopla")

    for(let i=0; i<nombres.length;i++){
        if(nombre.value == nombres[i][0]){
            window.location.href = nombres[i][1];
            break;
        }
    }
    
 
}

let addInfo = (video) =>{
    console.log(video.options[video.selectedIndex].value);
    console.log(descripciones[video.options[video.selectedIndex].value]);


    let descripcion = document.getElementById("lista-egresos")
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${descripciones[video.options[video.selectedIndex].value]}</div>
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


let eliminarIngreso = () =>{
    let descripcion = document.getElementById("lista-egresos")
    descripcion.innerHTML = "";
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
