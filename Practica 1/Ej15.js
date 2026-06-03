  // callback
  function loginUsuario(id, callback) {
    setTimeout(() => {
      if (id === 1) {
        callback(null, { id: 1, nombre: "Admin" });
      } else {
        callback("Usuario no encontrado", null);
      }
    }, 2000);
  }

  // promesa
  function loginPromesa(id) {
    return new Promise((resolve, reject) => {
      loginUsuario(id, (err, usuario) => {
        if (err) return reject(err);
        resolve(usuario);          
      });
    });
  }

  loginPromesa(1)
    .then(user => console.log(user))
    .catch(err => console.error(err));