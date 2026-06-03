function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Usuario obtenido de la base de datos");
      resolve({ id: id, nombre: "Juan" });
    }, 1000);
  });
}

function obtenerPedidos(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`2. Pedidos obtenidos para: ${usuario.nombre}`);
      resolve(["Laptop", "Monitor Gamer"]);
    }, 1000);
  });
}

// ENCADENAMIENTO
obtenerUsuario(1)
  .then((usuario) => {
    return obtenerPedidos(usuario);
  })
  .then((pedidos) => {
    console.log("3. Resultado final:", pedidos);
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });