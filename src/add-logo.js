import logo from './logo.jpg';

function addLogo() {
  const img = document.createElement('img');
  img.alt = 'Healthgrades';
  img.src = logo;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addLogo;
