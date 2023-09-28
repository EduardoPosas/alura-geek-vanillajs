import CategoryList from "../services/CategoryService.js";
import { productsByCategory, productsList } from "../services/ProductService.js";
import LoginButton from "../components/LoginBtn.js";
import LogoutBtn from "../components/LogoutBtn.js";
import AdminBtn from "../components/AdminBtn.js";

import handleSearching from "../helpers/SearchBar.js";
const searchBar = document.querySelector('[data-search]');

const AllCategories = async () => {
    const categories = await CategoryList();

    categories.forEach(async categoryItem => {
        const { id, category } = categoryItem;

        const container = document.querySelector('[data-categories]');

        const categoryContainer = document.createElement('section');
        categoryContainer.className = 'mb-8 last-of-type:mb-0';

        const productsContainer = document.createElement('div');
        productsContainer.className = 'grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6';

        const categoryHeadline = document.createElement('div');
        categoryHeadline.className = 'flex items-center justify-between mb-8 border-b-[1px] border-b-neutral-200';

        const headline = document.createElement('h2');
        headline.className = 'text-3xl font-bold text-neutral-700';
        headline.textContent = category;

        const headlineLink = document.createElement('a');
        headlineLink.className = "text-lg text-indigo-600 flex items-center after:content-[url('/images/right-arrow.svg')] after:ml-2 after:transition-transform after:ease-in-out after:duration-300 hover:after:translate-x-1";
        headlineLink.textContent = 'Ver Todo';
        headlineLink.href = `/alura-geek-vanillajs/views/products-category.html?category=${category}`;

        categoryHeadline.appendChild(headline);
        categoryHeadline.appendChild(headlineLink);

        categoryContainer.appendChild(categoryHeadline);


        const products = await productsByCategory(category);
        products.forEach(product => {
            const { category, description, id, imageUrl, name, price } = product;

            const productContainer = document.createElement('div');

            const productImg = document.createElement('img');
            productImg.className = 'h-[15rem] w-full object-cover object-top';
            productImg.src = imageUrl;
            productImg.alt = description;

            const productTitle = document.createElement('h3');
            productTitle.className = 'text-base mt-4';
            productTitle.textContent = name;

            const productPrice = document.createElement('p');
            productPrice.className = 'font-bold text-neutral-700 text-xl mt-4';
            productPrice.textContent = `$ ${price}`;

            const productLink = document.createElement('a');
            productLink.className = 'text-indigo-600 inline-block mt-4 transition-all duration-300 ease-in-out hover:text-indigo-800 hover:font-bold';
            productLink.textContent = 'Ver Producto';
            productLink.href = `/alura-geek-vanillajs/views/product-description.html?id=${id}`;

            productContainer.appendChild(productImg);
            productContainer.appendChild(productTitle);
            productContainer.appendChild(productPrice);
            productContainer.appendChild(productLink);

            productsContainer.appendChild(productContainer);
            categoryContainer.appendChild(productsContainer);
        });


        container.appendChild(categoryContainer);
    })

};


document.addEventListener('DOMContentLoaded', async () => {
    const session = JSON.parse(sessionStorage.getItem('user'));
    const headerContainer = document.querySelector('[data-header]');
    if (!session) {
        // window.location.reload();
        const login = LoginButton();
        headerContainer.appendChild(login);
    };
    if (session) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'flex gap-2';
        const logout = LogoutBtn();
        const admin = AdminBtn();
        logout.onclick = () => {
            sessionStorage.removeItem('user');
            window.location.reload();
        };
        buttonContainer.appendChild(admin);
        buttonContainer.appendChild(logout);
        headerContainer.appendChild(buttonContainer);
    }

    const products = await productsList();
    searchBar.addEventListener('keyup', (e) => handleSearching(e, products));

})

AllCategories();


