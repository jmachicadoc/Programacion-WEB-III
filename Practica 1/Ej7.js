const materias = ["Programación III", "Base de Datos I", "Web III", "Redes", "Sistemas"];

const [ , , ...elResto] = materias;

console.log(elResto); // ["Web III", "Redes", "Sistemas"]