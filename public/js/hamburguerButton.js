button = document.querySelector('.hamburguer');
navBar = document.querySelector('.navBar');
var btnMenu = document.getElementsByClassName("btn-menu");
var body = document.body
button.addEventListener('click',()=>{
    navBar.classList.toggle('active-hamburguer')
})
