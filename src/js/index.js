import css from '../sass/style.scss';
import html from '../index.html';

const toogleBtn = document.querySelector('.toogle');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const link = document.querySelectorAll('.aa');

toogleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('active');
});

for (let value of link) {
  value.addEventListener('click', () => {
    navbar.classList.remove('active');
    menu.classList.remove('active');
  });
}
