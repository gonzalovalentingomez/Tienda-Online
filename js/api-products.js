fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        return response.json();
    })
    .then(data => {
        // Aquí puedes manejar los datos obtenidos de la API
        console.log(data);
        // Por ejemplo, podrías mostrar los productos en tu tienda en línea
        data.forEach(producto => {
            // Aquí puedes acceder a los campos del producto, como producto.title, producto.price, etc.
            // y usar esa información para mostrar los productos en tu tienda en línea
        });
    })
    .catch(error => {
        console.error('Error:', error);
        // Aquí puedes mostrar un mensaje de error al usuario si ocurre algún problema al obtener los datos de la API
});
