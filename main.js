const menu = document.querySelector('.navbar_menu');

const toggleb = document.querySelector('.navbar_toggleb');

toggleb.addEventListener('click', () => {
  menu.classList.toggle('active');

});