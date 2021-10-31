
function guardarcambios(){
    let usuario=JSON.parse(localStorage.getItem('usuario'));

    let nombreshtml=document.getElementById("nombres");
    let apellidoshtml=document.getElementById("apellidos");
    let edadhtml=document.getElementById("edad");
    let emailhtml=document.getElementById("email");
    let telhtml=document.getElementById("tel");
    let fotitohtml=document.getElementById("fotito");

       

    if(nombreshtml.value != "" && nombreshtml.value != undefined && nombreshtml.value != null){
        document.getElementById("nombres").setAttribute("placeholder", nombreshtml)
        usuario.nombres=nombreshtml.value;
        }


    if(apellidoshtml.value != "" && apellidoshtml.value != undefined && apellidoshtml.value != null){
        document.getElementById("apellidos").setAttribute("placeholder", apellidoshtml);
        usuario.apellidos=apellidoshtml.value;
        }
   
    if(edadhtml.value != "" && edadhtml.value != undefined && edadhtml.value != null){
        document.getElementById("edad").setAttribute("placeholder", edadhtml);
        usuario.edad=edadhtml.value;
        }
 
    if(emailhtml.value != "" && emailhtml.value != undefined && emailhtml.value != null){
        document.getElementById("email").setAttribute("placeholder", emailhtml);
        usuario.email=emailhtml.value;
        }
  
    if(telhtml.value != "" && telhtml.value != undefined && telhtml.value != null){
        document.getElementById("tel").setAttribute("placeholder", telhtml);
        usuario.tel=telhtml.value
        }

    if (fotitohtml.src != "" && fotitohtml.src != undefined){
        document.getElementById("fotito").setAttribute("src", fotitohtml.src)
        usuario.foto=fotitohtml.src
    }
 
    localStorage.setItem("usuario",JSON.stringify(usuario));

         
}



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