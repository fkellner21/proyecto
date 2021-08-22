function verificar(){
    let dato= document.getElementById("user")
    let usuario = {};
    if (dato.value.trim() === "")
        {
            alert("Por favor, complete todos los campos");
            
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
