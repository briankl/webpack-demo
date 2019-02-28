import helloWorld from './hello-world';
import Logo from './Logo';

helloWorld();
const logo = new Logo();
logo.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
}

if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}

logo.SomeMethodDoesntExist();
