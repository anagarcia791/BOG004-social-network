// se importan vistas
import Singup from './singup.js';
import Login from './login.js';
import Wall from './wall.js';
import Error404 from './404.js';
// se crea componente de vistas
const components = {
  singup: Singup,
  login: Login,
  wall: Wall,
  error404: Error404,
};
export { components };
