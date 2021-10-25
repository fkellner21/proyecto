//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function guardarcambios(){
    let usuario=JSON.parse(localStorage.getItem('usuario'));
    let nombresLs=usuario.nombres;
    let apellidosLs=usuario.apellidos;
    let edadLs=usuario.edad;
    let emailLs=usuario.email;
    let telLs=usuario.tel
    let nombreshtml=document.getElementById("nombres");
    let apellidoshtml=document.getElementById("apellidos");
    let edadhtml=document.getElementById("edad");
    let emailhtml=document.getElementById("email");
    let telhtml=document.getElementById("tel");
    let fotitohtml=document.getElementById("fotito");

        console.log(nombresLs)

    if(nombreshtml != "" && nombreshtml != undefined  ){
        document.getElementById("nombres").setAttribute("placeholder", nombreshtml)
        usuario.nombres=nombreshtml.value;
        }
    // else if (nombresLs != "" && nombresLs != undefined){

    //         document.getElementById("nombres").setAttribute("placeholder", nombresLs)
    //         usuario.nombres=nombresLs.value;
    //     }

    if(apellidoshtml != "" && apellidoshtml != undefined){
        document.getElementById("apellidos").setAttribute("placeholder", apellidoshtml);
        usuario.apellidos=apellidoshtml.value;
        }
    // else if (apellidosLs != "" && apellidosLs != undefined){
    //         document.getElementById("apellidos").setAttribute("placeholder", apellidosLs);
    //         usuario.apellidos=apellidosLs.value;
    //     }
    if(edadhtml != "" && edadhtml != undefined){
        document.getElementById("edad").setAttribute("placeholder", edadhtml);
        usuario.edad=edadhtml.value;
        }
    // else if (edadLs != "" && edadLs != undefined){
    //         document.getElementById("edad").setAttribute("placeholder", edadLs);
    //         usuario.edad=edadLs.value;
    //     }
    if(emailhtml != "" && emailhtml != undefined){
        document.getElementById("email").setAttribute("placeholder", emailhtml);
        usuario.email=emailhtml.value;
        }
    // else if (emailLs != "" && emailLs != undefined){
    //         document.getElementById("email").setAttribute("placeholder", emailLs);
    //         usuario.email=emailLs.value;
    //     }
    if(telhtml != "" && telhtml != undefined){
        document.getElementById("tel").setAttribute("placeholder", telhtml);
        usuario.tel=telhtml.value
        }
    // else if (telLs != "" && telLs != undefined){
    //         document.getElementById("tel").setAttribute("placeholder", telLs);
    //         usuario.tel=telLs.value
    //     }

    if (fotitohtml.src != "" && fotitohtml.src != undefined){
        document.getElementById("fotito").setAttribute("src", fotitohtml.src)
        usuario.foto=fotitohtml.src
    }
    
    localStorage.setItem("usuario",JSON.stringify(usuario));


}

//falta solucionar que pasa cuando el usuario no pone datos y da guardar

function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }

document.addEventListener("DOMContentLoaded", function (e) {

    let usuario=JSON.parse(localStorage.getItem('usuario'));
    let nombresLs=usuario.nombres;
    let apellidosLs=usuario.apellidos;
    let edadLs=usuario.edad;
    let emailLs=usuario.email;
    let telLs=usuario.tel
    let fotitoLs=usuario.foto

    if(nombresLs != "" && nombresLs != undefined){
        document.getElementById("nombres").setAttribute("placeholder", nombresLs)
    
    }
  
    if(apellidosLs != "" && apellidosLs != undefined){
        document.getElementById("apellidos").setAttribute("placeholder", apellidosLs);
        }
        
    
    if(edadLs != "" && edadLs != undefined){
       document.getElementById("edad").setAttribute("placeholder", edadLs);
     }

    if(emailLs != "" && emailLs != undefined){
        document.getElementById("email").setAttribute("placeholder", emailLs);
     }
    
    if(telLs != "" && telLs != undefined){
        document.getElementById("tel").setAttribute("placeholder", telLs);
    }
    if(fotitoLs !="" && fotitoLs != undefined){
        document.getElementById("fotito").setAttribute("src", fotitoLs);
    }
});