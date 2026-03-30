function esPalindromo(texto) {
  let palabraOriginal = texto.toLowerCase();

  let palabraInvertida = palabraOriginal.split("").reverse().join("");

  return palabraOriginal === palabraInvertida;
}

// Pruebas
console.log(esPalindromo("oruro")); // true
console.log(esPalindromo("hola"));  // false