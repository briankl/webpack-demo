import logo from './logo.jpg';
import './logo.less';

function addLogo() {
  const img = document.createElement('img');
  img.alt = 'Healthgrades';
  img.src = logo;
  img.classList.add('hg-logo');

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addLogo;
