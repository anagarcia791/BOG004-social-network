// se importa vista de signup para test
import signUp from '../../src/views/signup.js';
// se indica mock de funciones de firebase para correr test
jest.mock('../../src/firebase-init.js');

// se realiza test al condicional de la vista que pide contraseña y confirmacion de contraseña para
// para crear usuario con correo y contraseña
describe('signUp', () => {
  it('Muestra mensaje de error cuando las contraseñas no coinciden', () => {
    document.body.innerHTML = '<div class="notification"></div>';

    const result = signUp();
    const pass = result.querySelector('#pass');
    const passConf = result.querySelector('#conf-pass');

    pass.value = 'password1';
    passConf.value = 'password2';

    const btn = result.querySelector('#signup-btn');
    btn.dispatchEvent(new Event('click'));

    const notification = document.querySelector('.notification');
    expect(notification.textContent).toBe('verificar contraseñas');
  });
});
