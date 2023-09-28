
const searchContainer = document.querySelector('[data-search-container]');

const handleSearching = (e, products) => {
    const input = e.target.value.toLowerCase();
    const container = document.querySelector('.filtered-products-container');
    if(container) {
        container.remove();
    }

    if(!input.length) return;

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));

    const ul = document.createElement('ul');
    ul.className = 'filtered-products-container absolute bg-white z-10 w-[40rem] mt-2 left-1/2 -translate-x-1/2 rounded-sm p-4 divide-y divide-indigo-200';
    filteredProducts.forEach(filteredProduct => {
        const {id, name} = filteredProduct;
        const li = document.createElement('li');
        li.className = 'mt-2 py-2 px-4 hover:bg-indigo-100 cursor-pointer'

        const descriptionLink = document.createElement('a');
        descriptionLink.className = 'block w-full'
        descriptionLink.textContent = name;
        descriptionLink.href = `/alura-geek-vanillajs/views/product-description.html?id=${id}`;

        li.appendChild(descriptionLink);
        ul.appendChild(li);

    });
    searchContainer.appendChild(ul);
};

export default handleSearching;

