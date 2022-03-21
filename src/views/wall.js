// se crea template de wall
export default () => {
  const wall = `
  <section class="wall">
    <header>
        <nav class="wall-nav">
            <img src="./assets/images/logobemusic.png" alt="logoBeMusic"></img>
            <picture class="wall-nav-pic">
                <i class="fa-solid fa-user" id="userpic"></i>
                <i class="fa-solid fa-arrow-right-from-bracket" id="signout" ></i>
            </picture>
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
    // ciclo para crear a ref o botones de generos musicales
    mCategories.forEach((value, index) => {
      musicValues += `<button type="button" id="${value}${index}">${value}</button>`;
      // musicValues += `<a href="" class="wall-categ-genre" id="${value}${index}">${value}</a>`;
    });
    // inserta estructura filtros
    musicCategoriesSec.innerHTML = musicValues;
  };

  // se invoca a la funcion createCategoriesStructure para crear opcion de publicacion
  createCategoriesStructure(musicCategories.type);

  // se camptura avatar
  const userPic = divElementWall.querySelector('#userpic');
  console.log(userPic);

  // se agrega evento click a boton de login
  const signoutBtn = divElementWall.querySelector('#signout');
  signoutBtn.addEventListener('click', () => {
    window.location.href = '#/'; // se cambia ventana a login para iniciar sesion
  });

  return divElementWall;
};
