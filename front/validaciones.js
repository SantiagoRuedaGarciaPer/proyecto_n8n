const nombre = document.getElementById("nombre").value;
const id = document.getElementById("id").value;
const email = document.getElementById("correo").value;
const motivo = document.getElementById("motivo").value;
const boton = document.getElementById("submit");
const form = document.getElementById("Formulario");

form.addEventListener('submit', ()=>{
    setTimeout(function() {
        window.location.href = 'pagina-de-agradecimiento.html';
    }, 5000);
})


