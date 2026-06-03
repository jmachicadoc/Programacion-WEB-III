function miCallback() {
  console.log("¡Han pasado 2 segundos! El callback se ejecutó.");
}

setTimeout(miCallback, 2000); 

console.log("Esperando los 2 segundos...");