import './world.less';

function world() {
  const h1 = document.createElement('h1');
  h1.innerText = 'World';
  h1.classList.add('world-heading');

  const body = document.querySelector('body');
  body.appendChild(h1);
}

export default world;
