import { changeView } from '../src/router.js';

jest.mock('../src/firebase-init.js');

const viewTest = () => {
  const formTestHtml = `
     <div id="textTest">Hola vista test</div>`;
  const divTest = document.createElement('div');
  divTest.innerHTML = formTestHtml;
  return divTest;
};
const componentsTest = {
  signup: viewTest,
};

describe('ruteo', () => {
  it(' debería cargar el form al #/signup ', () => {
    document.body.innerHTML = '<section class="router-container" id="routers-container"></section>';
    changeView('#/signup', componentsTest);
    expect(document.getElementById('routers-container').textContent).toEqual('Hola vista test');
  });
});

// describe('registro', () => {
//     it('debería cargar el template al hash registro', () => {
//       document.body.innerHTML = '<div id="container" ></div>';
//       const router = new Router(rutas);
//       router.loadRoute('registro');
//       console.log(document.body);
//       // router.loadRoute('registro');
//       expect(document.querySelector('#saludo')).toBeTruthy();
//     });
//     it('el template de registro debería ser Hola Mundo', () => {
//       document.body.innerHTML = '<div id="container" ></div>';
//       const router = new Router(rutas);
//       router.loadRoute('registro');
//       console.log(document.body);
//       expect(document.getElementById('container').textContent).toEqual('Hola mundo');
//     });
//     it('el template de registr debería ser imagen', () => {
//       const router = new Router(rutas);
//       router.loadRoute('registr');
//       console.log(document.body);
//       const div404 = document.querySelector('.no404');
//       expect(div404).toBeTruthy();
//     });
//   });
