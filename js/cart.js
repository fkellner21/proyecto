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
            <td><img src="img/borrar.png" width=20 onclick="borrar(${i})"></td>
            </tr>            
            `;

            
    }
        
    document.getElementById("comprashechas").innerHTML = articulo
}

function borrar(i){
    compras.articles.splice(i, 1);
    mostrarcompras(compras)
    subTotales()
    mostrarsubTotal()
  
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
       

            if (producto.currency=="USD"){
                aPagar+= plata 
            }
           else {
               aPagar+= (plata/40)
           }

           let envioPorTipo=document.querySelectorAll('input[class="custom-control-input"]');
           envioPorTipo.forEach(opcion => {
            if(opcion.checked){
                envio=parseInt((parseInt(opcion.value)/100)*aPagar)
            }   
           });
           
           document.getElementById("precio").innerHTML=aPagar
           
           document.getElementById("Ptotal").innerHTML=aPagar+envio
           document.getElementById("Penvio").innerHTML=envio
        }
}

function formaPago(){
    let pagoSelect=""
    let numCredi=document.getElementById("numCredi").value
    let numCSeg=document.getElementById("numCSeg").value
    let numVen=document.getElementById("numVen").value
    let numCuenta=document.getElementById("numCuenta").value
    let formaPago=document.querySelectorAll('input[class="formaPago"]');
    formaPago.forEach(opcion =>{
        if(opcion.checked){
            pagoSelect=opcion.value
        }
    })
    if(pagoSelect=="Tarjeta de credito"){
        if(numCredi != "" && numCSeg != "" && numVen != ""){
            document.getElementById("pagoSelect").innerHTML=pagoSelect
            document.getElementById("numCuenta").value=""
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los datos',
                
              })
        }
    }
    if(pagoSelect=="Transferencia bancaria"){
        if(numCuenta!=""){
            document.getElementById("pagoSelect").innerHTML=pagoSelect
            document.getElementById("numCredi").value=""
            document.getElementById("numCSeg").value=""
            document.getElementById("numVen").value=""
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los datos',
                
              })
        }
    }
    
}
function comprar(){
    let v1=document.getElementById("validation1").value
    let v2=document.getElementById("validation2").value
    let v3=document.getElementById("validation3").value
    let v4=document.getElementById("pagoSelect").textContent

    if (v1 != "" && v2 != "" && v3 != "" && v4 != "No seleccionó forma de pago"){

        Swal.fire(
            'Excelente!',
            'Compra exitosa!',
            'success'
          )
        
    } 
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor completa todos los datos',
            
          })
    }

}

document.addEventListener("DOMContentLoaded", function(e){ 
    getJSONData(COMPRAS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        compras = resultObj.data;
    
    mostrarcompras(compras);
    subTotales();
    mostrarsubTotal();
   


        }
    })
})