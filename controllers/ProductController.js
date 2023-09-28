import { productsList, deleteProduct } from "../services/ProductService.js";


const AllProducts = async () => {
    const data = await productsList();

    const produtcsContainer = document.querySelector('[data-products-container]');

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

        const deleteButton = document.createElement('img');
        deleteButton.className = 'w-[1rem] invert absolute top-1 right-1 cursor-pointer';
        deleteButton.src = '../images/delete-icon.svg';
        deleteButton.alt = 'delete button';
        productContainer.appendChild(deleteButton);
        deleteButton.onclick = async () => {
            await deleteProduct(id).then(() => {
                window.location.reload();
            })
        };

        const editButton = document.createElement('img');
        editButton.className = 'w-[1rem] invert absolute top-1 right-6 cursor-pointer';
        editButton.src = '../images/edit-icon.svg'
        editButton.alt = 'edit product button'
        productContainer.appendChild(editButton);
        editButton.onclick = () => {
            window.location.href = `/alura-geek-vanillajs/views/add-product.html?id=${id}`;
        }

        produtcsContainer.appendChild(productContainer);
    })
};

AllProducts();
document.addEventListener('DOMContentLoaded', () => {
    const session = JSON.parse(sessionStorage.getItem('user'));
    console.log(session)
    if( !session ) {
        window.location.href = '../index.html'
    };
})
