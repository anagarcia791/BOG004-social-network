// eslint-disable-next-line import/no-cycle
// import { changeView } from '../routers/router.js';

// se crea template de login
export default () => {
  const viewLogin = `
    <form class="singup-container">
        <section class="singup-logobemusic">
            <h1 class="singup-title">BeMusic</h1>
            <img src="./assets/images/logobemusic.png" width="50px">
        </section>
        <section class="singup-inputs">
            <input id="email" type="email" value="" placeholder="Correo"/>
            <input id="pass" type="password" value="" placeholder="Contraseña"/>
        </section>
        <button type="button" id="login-btn" class="singup-btn">Iniciar sesión</button>
        <p>---- O ----</p>
        <section class="singup-google">
            <p>Iniciar sesión con</p>
            <img src="./assets/images/logogoogle.png" width="50px"></img>
            <p>¿No tienes cuenta?</p>
            <button type="button" id="singup-btn-load" class="singup-btn-2">Regístrate</button>
        </section>
    </form>`;
  const divElementLogin = document.createElement('div');
  divElementLogin.innerHTML = viewLogin;

  // se agrega evento click a boton de singup
  const btnRegistrar = divElementLogin.querySelector('#singup-btn-load');
  btnRegistrar.addEventListener('click', () => {
    // event.preventDefault(); // changeView('#/signup');
    window.location.hash = '#/singup'; // se cambia ventana a singup para registrarse
  });

  return divElementLogin;
};
