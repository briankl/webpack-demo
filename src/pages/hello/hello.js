import './hello.less';

function hello() {
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello';
  h1.classList.add('hello-heading');

  const body = document.querySelector('body');
  body.appendChild(h1);
}

export default hello;
