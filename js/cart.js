//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function mostrarcompras(compras){

    let articulo = "";

  
    for(let i = 0; i < compras.articles.length; i++){      
        
        let producto=compras.articles[i]

            articulo +=
            `
            <tr>
            <td><img src= "${producto.src}" width="50%"></td>
            <td>${producto.name}</td>
            <td class="moneda">${producto.currency} </td>
            <td class="costo">${producto.unitCost}</td>
            <td ><input type="number" class="count" style="width: 60px;" min="1" class ="count" value="${producto.count}"></input></td>
            <td id=k class = "resultado">${producto.currency} `+ parseInt(producto.unitCost*producto.count) +`</td>
            </tr>            
            `;

            document.getElementById("comprashechas").innerHTML = articulo
    }
        

}

function subTotales(){
    
    let tbody= document.getElementById('comprashechas');
    for (let trs of tbody.children){
        

            let subTot = trs.getElementsByClassName('resultado')[0];
            let costo = trs.getElementsByClassName('costo')[0];
            let input = trs.getElementsByClassName('count')[0];
            let moneda=trs.getElementsByClassName('moneda')[0];
            input.addEventListener("change", (e)=> {
                subTot.textContent = moneda.textContent + e.target.value * costo.textContent
                mostrarsubTotal()
            })


    }
    
}


function mostrarsubTotal(){
    let trss= document.getElementById('comprashechas').children;
    
    let aPagar = 0

    for(let i = 0; i < compras.articles.length; i++){      
        let input = trss[i].getElementsByClassName('count')[0];
        let producto=compras.articles[i]
        let plata= parseInt(producto.unitCost*input.value)
        let envio= parseInt(document.getElementById("Penvio").textContent)

            if (producto.currency=="USD"){
                aPagar+= plata 
            }
           else {
               aPagar+= (plata/40)
           }

           document.getElementById("precio").innerHTML=aPagar
           document.getElementById("Ptotal").innerHTML=aPagar+envio
        }
}
function costoEnvio(a){
    document.getElementById("Penvio").innerHTML=a
    mostrarsubTotal()
}

document.addEventListener("DOMContentLoaded", function(e){ 
    getJSONData(COMPRAS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        compras = resultObj.data;
    
    mostrarcompras(compras);
    subTotales();
    costoEnvio(30);


        }
    })
})