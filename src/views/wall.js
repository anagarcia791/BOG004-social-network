// se importa funcion del observador de status y cerrar sesion y notificacion
import { currentUser, signOutUser } from '../controllers/wall.controller.js';
import { showNotification } from '../controllers/alerts.controllers.js';

// se crea template de wall
export default () => {
  const wall = `
  <section class="wall">
    <header>
        <nav class="wall-nav">
            <img src="./assets/images/logobemusic.png" alt="logoBeMusic"></img>
            <section class = "wall-nav-container">
                <picture class="wall-nav-pic">
                    <i class="fa-solid fa-user" id="userpic"></i>
                </picture>
                <i class="fa-solid fa-arrow-right-from-bracket" id="signout" ></i>
            </section>
        </nav>
    </header>
    <section class="wall-categories">
        <h2 class="wall-categ-title">Publicar</h2>
        <section class="wall-categ-container" id="wall-categ-container"></section>
    </section>
    <main class="wall-posts">
        <section class="wall-posts-container">
            <p>aca van las publicaciones</p>
        </section>
    </main>
  </section>`;

  const divElementWall = document.createElement('div');
  divElementWall.innerHTML = wall;

  const musicCategories = {
    type: ['Rock', 'Pop', 'Romántica', 'Reggaeton', 'Electrónica', 'Bailable', 'Country', 'Salsa'],
  };

  // funcion para crear estructura de filtros en html
  const createCategoriesStructure = (mCategories) => {
    // declaracion variable para agregar generos musicales
    const musicCategoriesSec = divElementWall.querySelector('#wall-categ-container');
    let musicValues = '';
    // ciclo para crear botones de generos musicales
    mCategories.forEach((value, index) => {
      musicValues += `<button type="button" id="${value}${index}">${value}</button>`;
    });
    // inserta estructura filtros
    musicCategoriesSec.innerHTML = musicValues;
  };
  // se invoca a la funcion createCategoriesStructure para crear opcion de publicacion
  createCategoriesStructure(musicCategories.type);

  // funcion para cambiar icono por foto
  const avatarChange = () => {
    const userPicHTML = divElementWall.querySelector('.wall-nav-pic');
    const userInfo = currentUser();
    if (userInfo.photoURL !== null) {
      userPicHTML.innerHTML = `<img src="${userInfo.photoURL}" alt="fotoUsuario"></img>`;
    }
  };
  // se invoca a la funcion para cambiar icono por foto
  avatarChange();

  // se agrega evento click a boton de cerrar sesión
  const signoutBtn = divElementWall.querySelector('#signout');
  signoutBtn.addEventListener('click', () => {
    signOutUser()
      .then(() => {
        window.location.hash = '#/';
      })
      .catch((error) => {
        showNotification(error);
      });
  });

  return divElementWall;
};
