import { productsByCategoryList } from "../services/ProductService.js";


const AllProductsByCategory = async () => {
    const url = new URL(window.location.href);
    const categoryQuery = url.searchParams.get('category');


    const data = await productsByCategoryList(categoryQuery);

    const productsHeader = document.querySelector('[data-products-header]');
    const produtcsContainer = document.querySelector('[data-products-container]');

    const productsHeadline = document.createElement('h2');
    productsHeadline.className = 'text-3xl font-bold text-neutral-700';
    productsHeadline.textContent = categoryQuery;

    const homeBtn = document.createElement('a');
    homeBtn.className = 'inline-block py-3 px-4 text-neutral-100 font-bold rounded-sm bg-indigo-600 mt-4 w-auto hover:bg-indigo-800';
    homeBtn.textContent = 'Ir a Inicio';
    homeBtn.href = '/alura-geek-vanillajs/'

    productsHeader.appendChild(productsHeadline);
    productsHeader.appendChild(homeBtn);

    data.forEach(product => {
        const { id, name, imageUrl, category, description, price } = product;
        const productContainer = document.createElement('div');
        productContainer.className = 'relative';

        const productImage = document.createElement('img');
        productImage.className = 'h-[15rem] w-full object-cover object-top';
        productImage.src = imageUrl;
        productImage.alt = description;
        productContainer.appendChild(productImage);

        const productTitle = document.createElement('h3');
        productTitle.className = 'text-base mt-4';
        productTitle.innerText = name;
        productContainer.appendChild(productTitle);

        const productPrice = document.createElement('p');
        productPrice.className = 'font-bold text-neutral-700 text-xl mt-4';
        productPrice.innerText = `$ ${price}`;
        productContainer.appendChild(productPrice);

        const productId = document.createElement('p');
        productId.className = 'mt-4';
        productId.innerText = `# ${id}`;
        productContainer.appendChild(productId);

        produtcsContainer.appendChild(productContainer);
    })
};

AllProductsByCategory();