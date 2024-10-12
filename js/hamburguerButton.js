button = document.querySelector('.hamburguer');
navBar = document.querySelector('.navBar');

button.addEventListener('click',()=>{
    navBar.classList.toggle('active-hamburguer')
})