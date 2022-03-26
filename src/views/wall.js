// se importa funcion del observador de status y cerrar sesion y notificacion
import { currentUser, signOutUser } from '../controllers/wall.controller.js';
import { showNotification } from '../controllers/alerts.controllers.js';

// se crea template de wall
export default () => {
  const wall = `
  <section class='wall'>
    <header>
        <nav class='wall-nav'>
            <img src='./assets/images/logobemusic.png' alt='logoBeMusic'></img>
            <section class = 'wall-nav-container'>
                <picture class='wall-nav-pic'>
                    <i class='fa-solid fa-user' id='userpic'></i>
                </picture>
                <i class='fa-solid fa-arrow-right-from-bracket' id='signout' ></i>
            </section>
        </nav>
    </header>
    <section class='wall-categories'>
        <h2 class='wall-categ-title'>Publicar</h2>
        <section class='wall-categ-container' id='wall-categ-container'></section>
    </section>
    <main class='wall-posts'>
          <section class='modal'>
            <section class = 'modal-container'>
              <section class='modal-container-header'>
                <h2>Crear Publicación</h2>
                <section class='modal-container-category'>
                  <p id='modal-category'>Categoría</p>
                  <i id='modal-container-close' class='fa-solid fa-circle-xmark'></i>
                </section>
              </section>
              <section class='modal-container-user'>
                <i class='fa-solid fa-user' id='userpic'></i>
                <p class='name'>nombre Usuario</p>
              </section>
              <section class='modal-text-content'>
                <textarea type='text' id='input-post' placeholder='Comparte tú evento o canción'  maxlength='200' required></textarea>
              </section>
                <button disabled type='button' class='modal-btn-post-inactive'>Publicar</button>
            </section>
          </section>
        <section class='wall-posts-container'>
            <p>aca van las publicaciones</p>
        </section>
    </main>
  </section>`;

  const divElementWall = document.createElement('div');
  divElementWall.innerHTML = wall;

  // funcion para verificar estado de url de foto
  const photoCondition = (userInfo) => {
    const userPicHTML = divElementWall.querySelector('.wall-nav-pic');
    if (userInfo === null || userInfo.photoURL === null) {
      userPicHTML.innerHTML = '<i class=\'fa-solid fa-user\' id=\'userpic\'></i>';
    } else {
      userPicHTML.innerHTML = `<img src='${userInfo.photoURL}' alt='user-pic'></img>`;
    }
  };

  // funcion para cambiar icono por foto
  const avatarChange = () => {
    // const userPicHTML = divElementWall.querySelector('.wall-nav-pic');
    const userInfo = currentUser();
    console.log(userInfo);
    if (userInfo) {
      photoCondition(userInfo);
    }
  };
  // se invoca a la funcion para cambiar icono por foto
  avatarChange();

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
      musicValues += `<button type='button' class='wall-categ-button' id='${value}${index}'>${value}</button>`;
    });
    // inserta estructura filtros
    musicCategoriesSec.innerHTML = musicValues;
  };
  // se invoca a la funcion createCategoriesStructure para crear opcion de publicacion
  createCategoriesStructure(musicCategories.type);

  // Función Open Modal
  const openModal = () => {
    const categories = divElementWall.querySelectorAll('.wall-categ-button');
    const modalPublication = divElementWall.querySelector('.modal');
    categories.forEach((elementCategory) => {
      elementCategory.addEventListener('click', (e) => {
        e.preventDefault();
        modalPublication.classList.add('modal--show');
        console.log(elementCategory);
      });
    });
  };
  openModal();

  // Función Close Modal
  const closeModal = () => {
    const modalPublication = divElementWall.querySelector('.modal');
    const modalClose = divElementWall.querySelectorAll('#modal-container-close');
    modalClose.forEach((elementCategory) => {
      elementCategory.addEventListener('click', (e) => {
        e.preventDefault();
        modalPublication.classList.remove('modal--show');
        console.log(elementCategory);
      });
    });
  };
  closeModal();

  // se agrega evento click a boton de cerrar sesión
  const signoutBtn = divElementWall.querySelector('#signout');
  signoutBtn.addEventListener('click', () => {
    signOutUser()
      .then(() => {
        window.sessionStorage.setItem('islogged', 'false');
        window.location.hash = '#/';
      })
      .catch((error) => {
        showNotification(error);
      });
  });

  return divElementWall;
};
