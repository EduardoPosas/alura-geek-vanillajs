import alert from '../components/alert.js';

const contactForm = document.querySelector('[data-contact]');
const contactContainer = document.querySelector('[data-contact-container]');

const handleContact = (e) => {
    e.preventDefault();

    let message;

    const contactData = {
        name: contactForm.querySelector('#name').value,
        message: contactForm.querySelector('#message').value
    };
    if(Object.values(contactData).includes('')) {
        message = alert('error', 'Todos los campos son obligatorios');
        contactContainer.insertBefore(message, contactForm);
        setTimeout(() => {
            message.remove();
        }, 3000)
        return;
    }

    if(contactData.name.length > 40) {
        message = alert('error', 'El nombre debe contener menos de 40 caracteres');
        contactContainer.insertBefore(message, contactForm);
        setTimeout(() => {
            message.remove();
        }, 3000)
        return;
    }

    if(contactData.message.length > 120) {
        message = alert('error', 'El nombre debe contener menos de 120 caracteres');
        contactContainer.insertBefore(message, contactForm);
        setTimeout(() => {
            message.remove();
        }, 3000)
        return;
    }
    
    message = alert('success', 'Datos enviados con éxito');
    contactContainer.insertBefore(message, contactForm);
    setTimeout(() => {
        message.remove();
        contactForm.reset();
    }, 3000)
}



contactForm.addEventListener('submit', handleContact);