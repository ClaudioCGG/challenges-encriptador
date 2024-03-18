const textarea = document.getElementById("textoEncriptar");

textarea.addEventListener("input", function () {
  const textoIngresado = textarea.value;

  // Verificar si hay mayúsculas
  if (/[A-Z]/.test(textoIngresado)) {
    alert("¡Solo se permiten minúsculas!");
    textarea.value = textoIngresado.toLowerCase(); // Convertir a minúsculas
  }

  // Verificar caracteres especiales
  if (/[^a-zA-Z\s]/.test(textoIngresado)) {
    alert("¡No se permiten caracteres especiales!");
    textarea.value = textoIngresado.replace(/[^a-zA-Z\s]/g, ""); // Eliminar caracteres especiales
  }
});
