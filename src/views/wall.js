// se importa funcion del observador de status y cerrar sesion y notificacion
import {
  currentUser,
  signOutUser,
  createPublication,
  readPublication,
  readAllPublications,
  deletePublication,
} from '../controllers/wall.controller.js';
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
        <form class='modal' id='modal-form'>
          <section class = 'modal-container'>
            <section class='modal-container-header'>
              <h2>Crear Publicación</h2>
              <section class='modal-container-category'>
                <p id='modal-category'>Categoría</p>
                <i id='modal-container-close' class='fa-solid fa-circle-xmark'></i>
              </section>
            </section>
            <section class='modal-container-user'>
              <section class='modal-container-user-icon'>
                <i class='fa-solid fa-user' id='userpic'></i>
              </section>
              <p class='modal-user-name'>nombre usuario</p>
            </section>
            <section class='modal-text-content'>
              <textarea type='text' id='input-post' placeholder='Comparte tú evento o canción'  maxlength='200' required></textarea>
            </section>
              <button type='submit' class='modal-btn-post-inactive' id='modal-btn-publish'>Publicar</button>
          </section>
        </form>
        <section class='wall-posts-container'></section>
    </main>
  </section>`;

  const divElementWall = document.createElement('div');
  divElementWall.innerHTML = wall;
  const wallControllerUserInfo = currentUser();
  console.log(wallControllerUserInfo, 'Info usuario en muro');

  // funcion para verificar estado de url de foto
  const photoCondition = (userInfo, catchUserPicHTML) => {
    const userPicHTML = catchUserPicHTML;
    if (userInfo === null || userInfo.photoURL === null) {
      userPicHTML.innerHTML = '<i class=\'fa-solid fa-user\' id=\'userpic\'></i>';
    } else {
      userPicHTML.innerHTML = `<img src='${userInfo.photoURL}' alt='user-pic'></img>`;
    }
  };

  // funcion para cambiar icono por foto
  const avatarChange = (userInfo) => {
    const catchUserPicHTML = divElementWall.querySelector('.wall-nav-pic');
    if (userInfo !== undefined && userInfo !== null) {
      photoCondition(userInfo, catchUserPicHTML);
    }
  };
  avatarChange(wallControllerUserInfo);

  // se crea objeto para categorias de musica
  const musicCategories = {
    type: ['Rock', 'Pop', 'Romántica', 'Reggaeton', 'Electrónica', 'Bailable', 'Country', 'Salsa'],
  };

  // funcion para crear estructura de filtros por categorias de musica en html
  const createCategoriesStructure = (mCategories) => {
    const musicCategoriesSec = divElementWall.querySelector('#wall-categ-container');
    let musicValues = '';
    mCategories.forEach((value, index) => {
      musicValues += `<button type='button' class='wall-categ-button' id='${value}${index}' value='${value}'>${value}</button>`;
    });
    musicCategoriesSec.innerHTML = musicValues;
  };
  createCategoriesStructure(musicCategories.type);

  // funcion para abrir modal de publicacion
  const openModal = (userInfo) => {
    const categories = divElementWall.querySelectorAll('.wall-categ-button');
    const modalPublication = divElementWall.querySelector('.modal');
    const pCategory = divElementWall.querySelector('#modal-category');
    const catchUserPicHTMLModal = divElementWall.querySelector('.modal-container-user-icon');
    const catchUserEmail = divElementWall.querySelector('.modal-user-name');
    categories.forEach((elementCategory) => {
      elementCategory.addEventListener('click', (e) => {
        e.preventDefault();
        pCategory.innerHTML = elementCategory.value;
        photoCondition(userInfo, catchUserPicHTMLModal);
        const userName = userInfo.email;
        const userNameString = userName.toString().split('@');
        catchUserEmail.innerHTML = userNameString[0];
        modalPublication.classList.add('modal--show');
      });
    });
  };
  openModal(wallControllerUserInfo);

  // funcion para cerrar modal de publicacion
  const closeModal = () => {
    const modalPublication = divElementWall.querySelector('.modal');
    const modalClose = divElementWall.querySelectorAll('#modal-container-close');
    modalClose.forEach((elementCategory) => {
      elementCategory.addEventListener('click', (e) => {
        e.preventDefault();
        modalPublication.classList.remove('modal--show');
      });
    });
  };
  closeModal();

  // funcion para crear publicación
  const publish = (userInfo) => {
    const modalPublication = divElementWall.querySelector('.modal');
    const formPublish = divElementWall.querySelector('#modal-form');
    formPublish.addEventListener('submit', (e) => {
      e.preventDefault();
      const publicationContent = formPublish['input-post'];
      const publicationGenere = divElementWall.querySelector('#modal-category');
      const publicationUserName = divElementWall.querySelector('.modal-user-name');
      const publicationUid = userInfo.uid;
      createPublication(
        publicationContent.value,
        publicationGenere.textContent,
        publicationUid,
        publicationUserName.textContent,
      );
      formPublish.reset();
      modalPublication.classList.remove('modal--show');
    });
  };
  publish(wallControllerUserInfo);

  // funcion para manejar publicaciones
  const postsManagement = (userInfo) => {
    const postContainer = divElementWall.querySelector('.wall-posts-container');
    const querySnapshot = readPublication();
    // funcion para leer todas las publicaciones de manera instantanea
    readAllPublications((snapShopResult) => {
      let postStructure = '';
      snapShopResult.forEach((doc) => {
        const post = doc.data();
        // const postId = doc.id;
        // const fecha = doc.postCreatedAt;
        // console.log(post, postId, fecha);
        postStructure += `
        <section class='post'>
          <section class='post-container'>
            <section class='post-container-header'>
              <section class='post-container-user'>
                <section class='post-container-user-icon'>
                  <i class='fa-solid fa-user' id='userpic'></i>
                </section>
                <p class='post-user-name'>${post.userNamePost}</p>
              </section>
              <p class='post-genere'>${post.generePost}</p>
            </section>
            <p class='post-content'>${post.inputPost}</p>
          </section>
          <section class='post-container-events'>
            <button >LIKE</button>
              <section class='post-container-btns'>
                <button class='post-btn-edit-publication'>Editar</button>
                <button class='post-btn-delete-publication' data-publicationid='${doc.id}'>Eliminar</button>
              </section>
          </section>
        </section>
        `;
      });
      postContainer.innerHTML = postStructure;

      // se agrega foto a los usuarios autenticados con google
      const catchUserPicHTMLPost = divElementWall.querySelectorAll('.post-container-user-icon');
      const docsList = snapShopResult.docs;
      catchUserPicHTMLPost.forEach((userHTML) => {
        docsList.forEach((doc) => {
          // console.log(typeof (userInfo.uid));
          // console.log(typeof (doc.data().uidPost));
          console.log(userInfo.uid);
          console.log(doc.data().uidPost);
          if (userInfo.uid === doc.data().uidPost) {
            console.log('nope');
            photoCondition(userInfo, userHTML);
          } else {
            console.log('nope');
          }
        });
        console.log(userHTML);
      });

      // console.log(snapShopResult.docs[0].data());
      // console.log(snapShopResult.docs.length);
      // console.log(snapShopResult.docs[0].data().uidPost);
      // console.log(snapShopResult.docs[0].data().userNamePost);

      // funcion para eliminar post
      const postRemover = () => {
        const deleteButton = divElementWall.querySelectorAll('.post-btn-delete-publication');
        deleteButton.forEach((btn) => {
          btn.addEventListener('click', ({ target: { dataset } }) => {
            deletePublication(dataset.publicationid);
          });
        });
      };
      postRemover();
    });
    readAllPublications(querySnapshot);
  };
  postsManagement(wallControllerUserInfo);

  // se agrega evento click a boton de cerrar sesión
  const signoutBtn = divElementWall.querySelector('#signout');
  signoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
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
