// usando promesas
enviarEmail("admin@correo.com")
  .then(respuesta => {
    return guardarEnLog(respuesta.id);
  })
  .then(resultadoLog => {
    console.log("Log guardado:", resultadoLog);
  })
  .catch(err => console.log(err));

// usando async/await
async function registrarEmail() {
  try {
    const respuesta = await enviarEmail("admin@correo.com");
    const resultadoLog = await guardarEnLog(respuesta.id);
    console.log("Log guardado:", resultadoLog);
  } catch (err) {
    console.log(err);
  }
}

