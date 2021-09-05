function verificar(){
    let dato= document.getElementById("user")
    let usuario = {};
    if (dato.value.trim() === "")
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor complete los campos!',
                timer: 2000,
              })
            
            }
    else {
                location.href="index.html"
                usuario.nombre = dato.value
                usuario.estado = "conectado"

                localStorage.setItem("usuario",JSON.stringify(usuario));
                sessionStorage.setItem("usuario",JSON.stringify(usuario));
        }
}
function desconectar(){
    localStorage.clear();
    location.href="login.html";
}
document.addEventListener("DOMContentLoaded" , function(e){
    let usu = JSON.parse(localStorage.getItem('usuario'));
    document.getElementById("usuarios").innerHTML=usu.nombre;
})


