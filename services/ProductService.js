
const productsList = async () => {
    const url = "https://alura-geek-api-e8fc.onrender.com/products";
    try {
        const request = await fetch(url);
        const products = await request.json();
        return products;

    } catch (error) {
        console.log(error);
    }
}

const productsByCategory = async (category) => {
    const url = `https://alura-geek-api-e8fc.onrender.com/products?category=${category}&_limit=6`;
    try {
        const request = await fetch(url);
        if(!request.ok) {
            throw new Error ('Petición falló');
        }

        const limitedProducts = await request.json();
        // console.log(limitedProducts);
        return limitedProducts;
    } catch (error) {
        console.log(error);
    }
};

const productsByCategoryList = async (category) => {
    const url = `https://alura-geek-api-e8fc.onrender.com/products?category=${category}`;

    try {
        const request = await fetch(url);
        if(!request.ok) {
            throw new Error ('Petición falló');
        }

        const categoryProducts = await request.json();
        // console.log(categoryProducts);
        return categoryProducts;
    } catch (error) {
        console.log(error);
    }
};

const productById = async (id) => {
    const url = `https://alura-geek-api-e8fc.onrender.com/products/${id}`;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Fallo la petición');
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.log(error.message);
    }
};

const addProduct = async (product) => {
    const url = 'https://alura-geek-api-e8fc.onrender.com/products';
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if(response.ok) {
            return response.body
        }

    }catch(error) {
        console.log(error)
    }
}

const updateProduct = async (data, id) => {
    const url = `https://alura-geek-api-e8fc.onrender.com/products/${id}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(response.ok) {
            return response.body;
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id) => {
    const url = `https://alura-geek-api-e8fc.onrender.com/products/${id}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        })
        console.log(response);
        if(response.ok) {
            return response.body;
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    productsList,
    addProduct,
    deleteProduct,
    productsByCategory,
    productsByCategoryList,
    productById,
    updateProduct
};