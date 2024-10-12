const buttons = document.querySelectorAll(".button"); // Seleciona todos os botões
const modal = document.querySelector("dialog");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".closeBtn");

// carrossel
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
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
emailjs.sendForm('contact_service', 'contact_form', this);

console.log('hw')
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