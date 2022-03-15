// se crea template de home
export default () => {
  const home = `
  <p>EN CONSTRUCCION JE JE JE </p>`;

  const divElementHome = document.createElement('div');
  divElementHome.innerHTML = home;

  return divElementHome;
};
