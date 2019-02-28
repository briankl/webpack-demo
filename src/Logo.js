import logo from './logo.jpg';
import './logo.less';

class Logo {
  logoCssBodyClass = 'hg-logo'; // modern browsers don't support class properties yet

  render() {
    const img = document.createElement('img');
    img.alt = 'Healthgrades';
    img.src = logo;
    img.classList.add(this.logoCssBodyClass);

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default Logo;
