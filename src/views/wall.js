// se crea template de wall
export default () => {
  const wall = `
  <p>EN CONSTRUCCION JE JE JE </p>`;

  const divElementWall = document.createElement('div');
  divElementWall.innerHTML = wall;

  return divElementWall;
};
