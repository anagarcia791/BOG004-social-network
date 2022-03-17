import signUp from '../../src/views/signup';

jest.mock('../../src/firebase-init.js');

describe('signUp', () => {
  it('Muestra mensaje de error cuando las contraseñas no coinciden', () => {
    // const signUpWithEmailAndPassword = jest.fn();
    // signUpWithEmailAndPassword.mockRejectedValue({ error: 'password/mismatch' });
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
