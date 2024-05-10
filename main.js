import './style.css'

// constantes
import { Header } from './src/Components/Header/Header';
import { Home } from './src/Components/Home/Home';
import { Footer } from './src/Components/Footer/Footer';
import request from './src/utils/Data';

// // variables
import Trivial from './src/Games/Trivial/Trivial';
import TresEnRaya from './src/Games/TresEnRaya/TresEnRaya';
import ElAhorcado from './src/Games/ElAhorcado/ElAhorcado';

document.querySelector('header').innerHTML = Header();
document.querySelector('footer').innerHTML = Footer();
const main = document.querySelector('main');



const tittle = document.querySelector('#tittle');
tittle.addEventListener('click', () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  Home();
  funciones()
})

// renderizar los juegos

const printTresEnRaya = (event) => {
  event.preventDefault();
  main.innerHTML = '';
  TresEnRaya();
};

const printElAhorcado = (event) => {
  event.preventDefault();
  main.innerHTML = '';
  ElAhorcado();
};

const printTrivial = (event) => {
  event.preventDefault();
  main.innerHTML = '';
  Trivial(request);
};

const funciones = () => {
  const clickTresEnRaya = document.querySelector('#TresEnRaya');
  clickTresEnRaya.addEventListener('click', printTresEnRaya);

  const clickElAhorcado = document.querySelector('#ElAhorcado');
  clickElAhorcado.addEventListener('click', printElAhorcado);

  const clickTrivial = document.querySelector('#Trivial');
  clickTrivial.addEventListener('click', printTrivial);
}

Home();
funciones();