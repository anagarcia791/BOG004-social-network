// import { changeView } from '../routers/router.js';
// se importa funciones de firebase y de notificacion
import { signupBtnEvent, signupGoogleEvent } from '../controllers/signup.controller.js';
import { showNotification } from '../controllers/alerts.controllers.js';

// se crea template de registro
export default () => {
  const viewSignup = `
  <section class="bg-cont">
      <form class="log-sig">
          <section class="log-sig-logobemusic">
              <h1 class="log-sig-title">BeMusic</h1>
              <img src="./assets/images/logobemusic.png" width="50px">
          </section>
          <section class="log-sig-container">
            <section class="log-sig-inputs">
                <input id="email" type="email" value="" placeholder="Correo"/>
                <input id="pass" type="password" value="" placeholder="Contraseña"/>
                <input id="conf-pass" type="password" value="" placeholder="Confirmar contraseña"/>
            </section>
            <button type="button" id="signup-btn" class="log-sig-btn">Continuar</button>
            <p>---- O ----</p>
            <section class="log-sig-google">
                <p>Iniciar sesión con</p>
                <img id="auth-google" src="./assets/images/logogoogle.png" width="50px"></img>
            </section>
            <section class = "log-sig-load">
                <button type="button" id="login-btn-load" class="log-sig-btn">Iniciar sesión</button>
            </section>    
          </section>
      </form>
  </section>`;
  const divElementSignup = document.createElement('div');
  divElementSignup.innerHTML = viewSignup;
  // se agrega evento click a boton continuar para crear usuario con correo y contraseña
  const signupBtn = divElementSignup.querySelector('#signup-btn');
  signupBtn.addEventListener('click', () => {
    const signupEmail = divElementSignup.querySelector('#email').value;
    const signupPassword = divElementSignup.querySelector('#pass').value;
    const sinupSecondPassword = divElementSignup.querySelector('#conf-pass').value;
    if (signupPassword === sinupSecondPassword) {
      signupBtnEvent(signupEmail, signupPassword);
    } else {
      showNotification('verificar contraseñas');
    }
  });
  // se agrega evento click a imagen para autenticar usuario con google
  const authGoogle = divElementSignup.querySelector('#auth-google');
  authGoogle.addEventListener('click', () => {
    signupGoogleEvent();
  });
  // se agrega evento click a boton de login
  const loginBtn = divElementSignup.querySelector('#login-btn-load');
  loginBtn.addEventListener('click', () => {
    // event.preventDefault(); // changeView('#/');
    window.location.hash = '#/'; // se cambia ventana a login para iniciar sesion
  });
  return divElementSignup;
};
