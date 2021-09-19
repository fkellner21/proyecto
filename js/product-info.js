//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
fetch(PRODUCT_INFO_URL)
.then( respuesta=>respuesta.json()) 
.then(datos=> { 
    document.getElementById('prodname').innerHTML= datos.name+ " " +datos.currency+ " " + datos.cost ;
    document.getElementById('prod_desc').innerHTML=datos.description;



})

function mostrarfotos (array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-sm-6 col-md-4 img-thumbnail" >
            <div class="d-block mb-5 h-100">
               <img class="img-responsive " src="` + imageSrc + `" />
           </div>
        </div>
      `

        document.getElementById("images").innerHTML = htmlContentToAppend;

}  }
function comentarlo(){
    let dicho = {};
    dicho.description = document.getElementById("texto").value;
    dicho.score = document.getElementById("valor").textContent;
    let dia=new Date()
    dicho.dateTime= dia.getFullYear()+"-"+(dia.getMonth()+1)+"-"+dia.getDay()+"-"+dia.getHours()+":"+dia.getMinutes()+":"+dia.getSeconds();
    let user = JSON.parse(localStorage.getItem('usuario'));
    dicho.user=user.nombre
    coment.push(dicho);
    mostrarcomentario(coment);
    document.getElementById("texto").value="";

}

function mostrarcomentario(coment){


    let htmlContentToAppend = "";
   for(let i = 0; i < coment.length; i++){

       let opinion = coment[i];

       htmlContentToAppend += `
       
       <tr width="200"><td>` + (opinion.user)+`</td><td >`+" "+(opinion.description) + " - " + (opinion.dateTime)+`</td> <td width="180">` + estrella(opinion.score) + `</td><tr>     
       `


        document.getElementById("tabla").innerHTML = htmlContentToAppend;


}

};
function estrella(num){
    let estrellas = "";
    for ( let i=1; i<=5; i++){
        if (i<=num){
            estrellas += `<i class="fas fa-star"></i>`;
            }
        else{
            estrellas += `<i class="far fa-star"></i>`;
        }

        
    }

    return(estrellas);

}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            fotos = resultObj.data;
            mostrarfotos(fotos.images)
        }
    })

    })
document.addEventListener("DOMContentLoaded", function(e){ 
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        coment = resultObj.data;
       
     mostrarcomentario(coment);

     
        }
    })
})

