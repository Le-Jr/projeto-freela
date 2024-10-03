
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
