const buttons = document.querySelectorAll(".button"); // Seleciona todos os botões
const modal = document.querySelector("dialog");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelectorAll(".closeBtn");
const form = document.getElementById("contact-form");
const modalContato = document.getElementById("modalContato");
const closeModalContato = document.getElementById("closeModalContato");
const campos = document.querySelectorAll(".inputs-form");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telefoneRegex = /^(\d{2})9\d{8}$/;
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

closeBtn.forEach((closeModal) => {
  closeModal.addEventListener("click", (e) => {
    modal.close();
    modalContato.style.display = "none";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  numValidate();
  if (nameValidate() && emailValidate() && numValidate()) {
    modalContato.style.display = "block";
    enviaEmail();
    form.reset();
  }
});

function setError(index) {
  campos[index].setAttribute("style", "border-color:  #e63636 !important;");
  spans[index].style.visibility = "visible";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.visibility = "hidden";
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
    return true;
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
    return true;
  }
}

function numValidate() {
  if (!telefoneRegex.test(campos[2].value)) {
    setError(2);
  } else {
    removeError(2);
    return true;
  }
}

// lançador de E-mails

emailjs.init({
  publicKey: "dghQi-EOdR6yvYSzA",
});
emailjs.sendForm("contact_service", "contact_form");

function enviaEmail() {
  if (!form) {
    console.log("Formulário não encontrado");
  }

  console.log(emailjs);
  emailjs.sendForm("service_ggficvm", "template_wkf10lt", form).then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}

// animação barra de competencia

const barraCompetencia = document.querySelector(".barraCompetencia");
const competencia = document.querySelectorAll(".w3-dark-grey");

const myObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    for (var i = 0; i < competencia.length; i++) {
      competencia[i].classList.add("barra");
    }
  }
});
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
    servicesLinks[i].className = servicesLinks[i].className.replace(
      " activeServices",
      ""
    );
  }
  document.getElementById(ServiceName).style.display = "block";
  evt.currentTarget.className += " activeServices";
  document.getElementById("botaoModal").classList.remove("activeServices");
}

function redirecionarServico() {
  modal.close();
  const serviceName = modalTitle.textContent
    .toLocaleLowerCase()
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  openService(event, serviceName);
}
