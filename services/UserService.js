
const findUserByEmail = async (email) => {
    const url = `https://alura-geek-api-e8fc.onrender.com/users?email=${email}&_limit=1`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Error al obtener usuario');
        }
        const user = response.json();
        return user;
    } catch (error) {
        console.log('Error en la petición');
    }

};


export {
    findUserByEmail
};