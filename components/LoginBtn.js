
const LoginButton = () => {
    const button = document.createElement('a');
    button.className = 'py-3 px-4 border border-indigo-600 text-indigo-600 font-bold rounded-sm hover:bg-indigo-800 hover:text-neutral-100';
    button.href = '/alura-geek-vanillajs/views/login.html';
    button.textContent = 'Login';

    return button;
};

export default LoginButton;