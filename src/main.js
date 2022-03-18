// importamos los cambios de vistas y funciones que controlan eventos
import { changeView } from './router.js';

// funcion init para vistas y eventos
const init = () => {
  console.log(window.location.hash, 'hi desde funcion init de main.js');
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
