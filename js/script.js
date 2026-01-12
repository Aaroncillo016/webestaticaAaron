const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const texto = document.getElementById("texto").value.trim();
    const resultado = document.getElementById("resultado");

    if (texto === "") {
        resultado.textContent = "Ey 👀 escribe algo primero";
        return;
    }

    const letras = texto.length;

    resultado.textContent = `Hola ${texto} 👋✨  
Tu nombre tiene ${letras} letras… precioso, por cierto 😌`;
});