// importamos el componente de las vistas
import { components } from '../views/index.js';

// funcion de condicion de cambio de rutas
const changeView = (route) => {
  console.log(route, 'route desde router.js');
  const hash = route.split('/')[1];
  console.log(hash, 'hash desde router.js');
  const sectionHTML = document.querySelector('#routers-container');
  sectionHTML.innerHTML = '';
  switch (route) {
    case '':
    case ' ':
    case '#':
    case '#/':
    case 'localhost:3000':
    { return sectionHTML.appendChild(components.login()); }
    case '#/signup':
    case '#/wall':
    { return sectionHTML.appendChild(components[hash]()); }
    default:
      return sectionHTML.appendChild(components.error404());
  }
};

export { changeView };
