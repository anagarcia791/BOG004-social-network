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
    expect(document.getElementById('routers-container').textContent.trim()).toEqual('Hola vista test');
  });
});
