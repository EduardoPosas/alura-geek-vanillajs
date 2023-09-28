import { addProduct, productById, updateProduct } from '../services/ProductService.js';
import CategoryList from '../services/CategoryService.js';

import alert from '../components/alert.js';

const addProductForm = document.querySelector('[data-add-product]');
const containerForm = document.querySelector('[data-form-product]');
let user = {};
let isEditing;

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        imageUrl: addProductForm.querySelector('[id="url"]').value,
        category: addProductForm.querySelector('[id="category"]').value,
        name: addProductForm.querySelector('[id="name"]').value,
        price: addProductForm.querySelector('[id="price"]').value,
        description: addProductForm.querySelector('[id="description"]').value,
    };

    console.log(formData);

    if (Object.values(formData).includes('')) {
        const mostrarAlerta = alert('error', 'Todos los campos son obligatorios');
        containerForm.insertBefore(mostrarAlerta, addProductForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }

    if (formData.name.length > 20) {
        const mostrarAlerta = alert('error', 'El nombre debe tener menos de 20 caracteres');
        containerForm.insertBefore(mostrarAlerta, addProductForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }

    if (formData.description.length > 150) {
        const mostrarAlerta = alert('error', 'La descripción debe tener menos de 150 caracteres');
        containerForm.insertBefore(mostrarAlerta, addProductForm);
        setTimeout(() => {
            mostrarAlerta.remove();
        }, 3000)
        return;
    }

    if (isEditing) {
        await updateProduct(formData, user.id);
        window.location.href = '/alura-geek-vanillajs/views/products.html';
        return;
    }

    await addProduct(formData);
    window.location.href = '/alura-geek-vanillajs/views/products.html';
}

const fillFormSelect = async () => {

    const categories = await CategoryList();

    console.log(categories);
    categories.forEach(categoryItem => {
        const { id, category } = categoryItem;

        const formSelect = document.querySelector('#category');

        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;

        formSelect.appendChild(option);
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    const session = JSON.parse(sessionStorage.getItem('user'));
    console.log(session)
    if (!session) {
        window.location.href = '/alura-geek-vanillajs/index.html'
    };

    fillFormSelect();

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    const formTitle = document.querySelector('[data-form-title]');
    const submitBtn = document.querySelector('[data-form-submit]');

    if (id) {
        user = await productById(id);

        if (user) {
            console.log(user);
            const { category, description, id, imageUrl, name, price } = user;
            isEditing = true;

            formTitle.textContent = 'Editar Producto';
            submitBtn.value = 'Editar';

            addProductForm.querySelector('[id="url"]').value = imageUrl;
            addProductForm.querySelector('[id="category"]').value = category;
            addProductForm.querySelector('[id="name"]').value = name;
            addProductForm.querySelector('[id="price"]').value = price;
            addProductForm.querySelector('[id="description"]').value = description;
            return;
        } else {
            window.location.href = '/alura-geek-vanillajs/views/products.html';
        }
    }

    isEditing = false;
    formTitle.textContent = 'Agregar Nuevo Producto';
    submitBtn.value = 'Agregar';

});

addProductForm.addEventListener('submit', handleSubmit);
