import { productById, productsByCategory } from '../services/ProductService.js';



const productDescription = async () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    console.log(id);

    if (!id) window.location.href = '/';

    const user = await productById(id);

    if (!user) window.location.href = '/';

    console.log(user);

    const { name, price, description, imageUrl, category, id: productId } = user;

    const productDescriptionContainer = document.querySelector('[data-product-description]');

    const data = `
                <img class="w-full md:w-1/2 object-cover object-top h-[20rem] md:h-[30rem] lg:h-[40rem]" src=${imageUrl} alt=${description}>
                <div class="py-2 flex flex-col gap-4 md:justify-center grow">
                    <h2 class="text-2xl md:text-4xl lg:text-6xl leading-3">${name}</h2>
                    <p class="text-xl md:text-2xl lg:text-3xl font-bold">$${price}</p>
                    <p class="text-base">${description}</p>
                </div>
            `;

    productDescriptionContainer.innerHTML = data;


    const categoryProducts = await productsByCategory(category);
    const similarProducts = categoryProducts.filter(product => product.id !== productId);
    const similarProductsContainer = document.querySelector('[data-similar-products]')

    similarProducts.forEach(product => {
        const {imageUrl, name, price, id: similarId} = product;

        const similarData = `
            <div>
            <img class="h-[15rem] w-full object-cover object-top" src=${imageUrl} alt="product image">
            <h3 class="text-base mt-4">${name}</h3>
            <p class="font-bold text-neutral-700 text-xl mt-4">$${price}</p>
            <a href="/views/product-description.html?id=${similarId}" class="text-indigo-600 inline-block mt-4 transition-all duration-300 ease-in-out hover:text-indigo-800 hover:font-bold">Ver Producto</a>
            </div>
        `;

        similarProductsContainer.innerHTML += similarData;
    })
};

productDescription();