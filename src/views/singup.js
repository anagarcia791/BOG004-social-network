// eslint-disable-next-line import/no-cycle
// import { changeView } from '../routers/router.js';
import { singupBtnEvent, singupGoogleEvent } from '../controllers/singup.controller.js';
import { showNotification } from '../controllers/alerts.controllers.js';

// se crea template de registro
export default () => {
  const viewSingup = `
    <form class="singup-container">
        <section class="singup-logobemusic">
            <h1 class="singup-title">BeMusic</h1>
            <img src="./assets/images/logobemusic.png" width="50px">
        </section>
        <section class="singup-inputs">
            <input id="email" type="email" value="" placeholder="Correo"/>
            <input id="pass" type="password" value="" placeholder="Contraseña"/>
            <input id="conf-pass" type="password" value="" placeholder="Confirmar contraseña"/>
        </section>
        <button type="button" id="singup-btn" class="singup-btn">Continuar</button>
        <p>---- O ----</p>
        <section class="singup-google">
            <p>Iniciar sesión con</p>
            <img id="auth-google" src="./assets/images/logogoogle.png" width="50px"></img>
            <button type="button" id="login-btn-load" class="singup-btn">Iniciar sesión</button>
        </section>
    </form>`;
  const divElementSingup = document.createElement('div');
  divElementSingup.innerHTML = viewSingup;
  // se agrega evento click a boton continuar para crear usuario con correo y contraseña
  const singupBtn = divElementSingup.querySelector('#singup-btn');
  singupBtn.addEventListener('click', () => {
    const singupEmail = divElementSingup.querySelector('#email').value;
    const singupPassword = divElementSingup.querySelector('#pass').value;
    const sinupSecondPassword = divElementSingup.querySelector('#conf-pass').value;
    if (singupPassword === sinupSecondPassword) {
      singupBtnEvent(singupEmail, singupPassword);
    } else {
      showNotification('verificar contraseñas');
    }
  });
  // se agrega evento click a imagen para autenticar usuario con google
  const authGoogle = divElementSingup.querySelector('#auth-google');
  authGoogle.addEventListener('click', () => {
    singupGoogleEvent();
  });
  // se agrega evento click a boton de login
  const loginBtn = divElementSingup.querySelector('#login-btn-load');
  loginBtn.addEventListener('click', () => {
    // event.preventDefault(); // changeView('#/');
    window.location.hash = '#/'; // se cambia ventana a login para registrarse
  });

  return divElementSingup;
};
