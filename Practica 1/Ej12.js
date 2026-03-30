// usando callback
obtenerUsuario(1, (error, usuario) => {
    if (error) return console.error(error);
    obtenerPedidos(usuario.nombre, (error, pedidos) => {
        if (error) return console.error(error);
        obtenerDetallesPedido(pedidos[0], (error, detalles) => {
            if (error) return console.error(error);
            console.log(detalles);
        });
    });
});

// usando async/await
async function mostrarDetallesUsuario() {
    try {
        const usuario = await obtenerUsuario(1);
        const pedidos = await obtenerPedidos(usuario.nombre);
        const detalles = await obtenerDetallesPedido(pedidos[0]);
        console.log(detalles);
    } catch (error) {
        console.error(error); // Manejo de errores centralizado
    }
}
mostrarDetallesUsuario();
