import './style.css'

// const navBtn = document.querySelector('#menu');
const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
 const isExpanded = JSON.parse(navBtn.getAttribute ('aria-expanded'));
 navBtn.setAttribute('aria-expanded', !isExpanded);
 menuBar.classList.toggle('-translate-y-[400px]');
 menuBar.classList.toggle('flex-row');
})
