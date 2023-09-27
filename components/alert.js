
const alert = (type = 'error', message) => {
    const alertExist = document.querySelector('.alert');
    if(alertExist) {
        alertExist.remove();
    }
    const alert = document.createElement('p');

    if(type === 'error') {
        alert.className = 'alert py-3 px-4 text-neutral-100 font-bold rounded-sm bg-red-600 mt-4 text-center';
    } else {
        alert.className = 'bg-green-500 py-3 px-4 text-neutral-100 text-sm font-bold rounded-sm text-center';
    }
    alert.innerText = message;

    return alert;
}

export default alert;