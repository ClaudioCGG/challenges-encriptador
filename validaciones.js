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

function encriptarTexto() {
  var mensaje = document.getElementById("textoEncriptar").value;
  console.log(mensaje);

  if (mensaje === "") {
    // Mostrar mensaje de error y la imagen
    document.querySelector(".mensaje-resultado").textContent =
      "Ningún mensaje fue encontrado";
  } else {
    var mensajeNuevo = "";

    for (var i = 0; i < mensaje.length; i++) {
      switch (mensaje[i]) {
        case "a":
          mensajeNuevo += "ai";
          break;
        case "e":
          mensajeNuevo += "enter";
          break;
        case "i":
          mensajeNuevo += "imes";
          break;
        case "o":
          mensajeNuevo += "ober";
          break;
        case "u":
          mensajeNuevo += "ufat";
          break;
        default:
          mensajeNuevo += mensaje[i];
      }
    }

    // Ocultar mensaje de error y la imagen
    document.getElementById("imgCifrar").style.display = "none";
    document.querySelector(".mensaje-resultado").textContent = mensajeNuevo;
  }
}

function desencryptarTexto() {
  var mensaje = document.getElementById("textoEncriptar").value;

  if (mensaje === "") {
    // Mostrar mensaje de error y la imagen
    document.querySelector(".mensaje-resultado").textContent =
      "Ningún mensaje fue encontrado";
  } else {
    var mensajeNuevo = mensaje
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    // Ocultar mensaje de error y la imagen
    document.getElementById("imgCifrar").style.display = "none";
    document.querySelector(".mensaje-resultado").textContent = mensajeNuevo;
  }
}

function copyTexto() {
  var textoCopiar = document.querySelector(".mensaje-resultado").textContent;

  document.getElementById("textoEncriptar").value = textoCopiar;
}
