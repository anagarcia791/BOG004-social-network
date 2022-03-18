// se crea template de wall
export default () => {
  const wall = `
  <section class="wall">
    <header>
        <nav class="wall-nav">
            <img src="./assets/images/logobemusic.png" alt="logoBeMusic"></img>
            <picture class="wall-nav-pic">
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-arrow-right-from-bracket" id="signout" ></i>
            </picture>
        </nav>
    </header>
    <section class="wall-categories">
        <h2 class="wall-categ-title">Publicar</h2>
        <div class="wall-categ-container">
            <a href="">Rock</a>
            <a href="">Pop</a>
        </div>
    </section>
    <main class="wall-posts">
        <section class="wall-posts-container"></section>
    </main>
  </section>`;

  const divElementWall = document.createElement('div');
  divElementWall.innerHTML = wall;

  // se agrega evento click a boton de login
  const signoutBtn = divElementWall.querySelector('#signout');
  signoutBtn.addEventListener('click', () => {
    // event.preventDefault(); // changeView('#/');
    window.location.href = '#/'; // se cambia ventana a login para iniciar sesion
  });

  return divElementWall;
};
