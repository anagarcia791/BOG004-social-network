import { signupBtnEvent } from '../../src/controllers/signup.controller.js';

jest.mock('../../src/firebase-init.js');

describe('signUp Controller', () => {
  it('Creación de usuario con correo y contraseña exitoso', (done) => {
    const email = 'test@gmail.com';
    const password = 'test123';
    expect(typeof signupBtnEvent(email, password)).toBe('object');
    console.log(signupBtnEvent(email, password), 'Exitoso');
    done();
  });
});

// PARA VERIFICAR EL LUNES PILAS!!!
//   it('Creación de usuario con correo y contraseña no exitoso', (done) => {
//     // signupBtnEvent.mockRejectedValue({ error: 'auth/email-already-in-use' });
//     const email2 = 'ana1@gmail.com';
//     const password2 = 'ana12345';
//     const result = signupBtnEvent(email2, password2);
//     expect(result.status).toBe(false);
//     console.log(signupBtnEvent(email2, password2), 'No Exitoso');
//     done();
