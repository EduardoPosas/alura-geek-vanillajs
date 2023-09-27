
const LogoutBtn = () => {
    const button = document.createElement('a');
    button.className = 'py-3 px-4 border border-red-600 text-red-600 font-bold rounded-sm hover:bg-red-800 hover:text-neutral-100';
    button.href = '';
    button.textContent = 'Logout';

    return button;
}

export default LogoutBtn;