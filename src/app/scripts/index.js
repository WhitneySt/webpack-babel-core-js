import '../styles/style.scss';
// Para incluir polyfills de ES6+ para todo el proyecto
// import "core-js/stage"

// O para incluir sólo parte de las polyfills (Recomendada)
import "core-js/features/array/from";
import "core-js/features/set"
console.log("Esta es la página login");

const arrayEjemplo = [1, 1, 2, 2, 2, 3, 4, 4];
const setArray = new Set(arrayEjemplo);
console.log(setArray);
const nuevoArray = Array.from(setArray);
console.log(nuevoArray);
