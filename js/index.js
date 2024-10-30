const buttons = document.querySelectorAll(".button"); // Seleciona todos os botões
const modal = document.querySelector("dialog");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".closeBtn");


// carrossel
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Pega os valores do data-* do botão clicado
    const title = button.getAttribute("data-title");
    const content = button.getAttribute("data-content");

    // Atualiza o conteúdo do modal
    modalTitle.textContent = title;
    modalContent.textContent = content;

    // Abre o modal
    modal.showModal();
    modal.scrollTo(0, 0);
  });
});

closeBtn.addEventListener("click", (e) => {
  modal.close();
});



// lançador de E-mails
emailjs.init({
    publicKey: 'XmsXrHXLJumUYY0IM',
  });
emailjs.sendForm('contact_service', 'contact_form');

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(emailjs)
        emailjs.sendForm('service_kxd81p4', 'template_do0cnf8', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

// animação barra de competencia

const barraCompetencia = document.querySelector('.barraCompetencia');
const competencia = document.querySelectorAll('.w3-dark-grey');

const myObserver = new IntersectionObserver((entries) =>{
  if(entries[0].isIntersecting){
    for ( var i = 0; i < competencia.length; i++) {
      competencia[i].classList.add('barra');    
    } 
  }
})
myObserver.observe(barraCompetencia);


// Servicos 
function openService(evt, ServiceName) {
  var i, servicesContent, servicesLinks;
  //Pega o classe dos servicos e remove o display das demais
  servicesContent = document.getElementsByClassName("servicesContent");
  for (i = 0; i < servicesContent.length; i++) {
    servicesContent[i].style.display = "none";
  }
  //Pega os links do servicos e deixa ativado o link clicado
  servicesLinks = document.getElementsByClassName("servicesLinks");
  for (i = 0; i < servicesLinks.length; i++) {
    servicesLinks[i].className = servicesLinks[i].className.replace(" activeServices", "");
  }
  document.getElementById(ServiceName).style.display = "block";
  evt.currentTarget.className += " activeServices";
  document.getElementById('botaoModal').classList.remove('activeServices');
}

function redirecionarServico(){
  modal.close();
  const serviceName = modalTitle.textContent.toLocaleLowerCase().split(" ").join("-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  openService(event , serviceName);
}