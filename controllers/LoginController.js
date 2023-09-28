import { findUserByEmail } from "../services/UserService.js";
import alert from "../components/alert";

const loginForm = document.querySelector('[data-login]');
const loginContainer = document.querySelector('[data-login-container]');

const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
        email: loginForm.querySelector('[id="email"]').value,
        password: loginForm.querySelector('[id="password"]').value
    };

    if(Object.values(formData).includes('')) {
        const mostrarAlerta = alert('error', 'Todos los campos son obligatorios');
        loginContainer.insertBefore(mostrarAlerta, loginForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }else if(!validateEmail(formData.email)) {
        const mostrarAlerta = alert('error', 'Email no válido');
        loginContainer.insertBefore(mostrarAlerta, loginForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }

    // UserExists
    const [user] = await findUserByEmail(formData.email);
    if(!user) {
        const mostrarAlerta = alert('error', 'Usuario no existe');
        loginContainer.insertBefore(mostrarAlerta, loginForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }

    // Verificar contraseña
    if(formData.password !== user.password) {
        const mostrarAlerta = alert('error', 'Contraseña incorrecta');
        loginContainer.insertBefore(mostrarAlerta, loginForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }

    // Crear sesión de usuario
    sessionStorage.setItem('user', JSON.stringify({email: user.email, isAdmin: true}));
    window.location.href  = '/alura-geek-vanillajs/views/products.html';    
}


loginForm.addEventListener('submit', handleLogin);