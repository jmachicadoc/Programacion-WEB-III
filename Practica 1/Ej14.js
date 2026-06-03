function servicioPromesa() {
  return Promise.resolve("Datos recibidos");
}

function convertirACallback(miCallback) {
  servicioPromesa()
    .then(datos => {
      miCallback(null, datos);
    })
    .catch(err => {
      miCallback(err, null);
    });
}

// Uso
convertirACallback((err, resultado) => {
  if (err) return console.error(err);
  console.log("Resultado via callback:", resultado);
});
