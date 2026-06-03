// promesas
function procesarVenta() {
  validarStock("Monitor")
    .then(stock => {
      return crearFactura(stock);
    })
    .then(factura => {
      console.log("Venta completada:", factura.id);
    })
    .catch(error => {
      console.log("Error en la venta:", error);
    });
}

// async/await
async function procesarVenta() {
  try {
    const stock = await validarStock("Monitor");
    const factura = await crearFactura(stock);
    
    console.log("Venta completada:", factura.id);
  } catch (error) {
    console.log("Error en la venta:", error);
  }
}