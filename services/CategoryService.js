
const CategoryList = async () => {
    const url = 'https://alura-geek-api-e8fc.onrender.com/categories';
    try {
        const response = await fetch(url);
        const categories = await response.json();

        if(!response.ok) {
            throw new Error('Fallo al realizar la petición a categorias');
        }
        return categories;
        
    }catch(error) {
        console.log(error);
    }
};

export default CategoryList;