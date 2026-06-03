function invertirCadena(texto) {
  return texto.split("").reverse().join("");
}

// Prueba
let cad = invertirCadena("abcd");
console.log(cad); //dcba