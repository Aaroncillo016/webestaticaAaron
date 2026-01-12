const formulario = document.getElementById("formulario");
const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const year = document.getElementById("year");

const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

year.textContent = new Date().getFullYear();

function saludoSegunHora() {
  const h = new Date().getHours();
  if (h < 12) return "Buenos días";
  if (h < 20) return "Buenas tardes";
  return "Buenas noches";
}

function setResult(message) {
  resultado.textContent = message;
}

setResult("Escribe tu nombre y genera un saludo personalizado.");

formulario?.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = (input.value || "").trim();
  if (!nombre) {
    setResult("Por favor, introduce un nombre válido.");
    input.focus();
    return;
  }

  // Procesamiento: capitaliza la primera letra de cada palabra
  const nombreNormalizado = nombre
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  const letras = nombreNormalizado.replace(/\s+/g, "").length;

  setResult(`${saludoSegunHora()}, ${nombreNormalizado}. Encantado de conocerte. (Nombre: ${letras} caracteres)`);
});

navToggle?.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});
