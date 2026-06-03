function contarVocales(texto) {
  let conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let textoMin = texto.toLowerCase();

  for (let letra of textoMin) {
    if (conteo.hasOwnProperty(letra)) {
      conteo[letra]++;
    }
  }

  return conteo;
}

// Prueba
let obj = contarVocales("euforia");
console.log(obj);