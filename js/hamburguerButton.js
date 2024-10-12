button = document.querySelector('.hamburguer');
navBar = document.querySelector('.navBar');

button.addEventListener('click',()=>{
    navBar.classList.toggle('active-hamburguer')
    navBar.classList.toggle('w3-hide-small')
})