const miPromesa = new Promise((resolve, reject) => {
  
  setTimeout(() => {

    resolve("Promesa cumplida con exito despues de 3 segundos");
  }, 3000);

});

miPromesa.then((mensaje) => {
  console.log(mensaje);
});

console.log("La promesa esta en proceso...");