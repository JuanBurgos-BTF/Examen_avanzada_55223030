document.addEventListener("DOMContentLoaded", obtenerProductos);

function obtenerProductos() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => mostrarProductos(data));
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("producto");
        item.innerHTML = `
            <img src="${producto.image}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>💲 ${producto.price}</p>
            <p>📦 Categoría: ${producto.category}</p>
        `;
        contenedor.appendChild(item);
    });
}

function filtrarProductos() {
    const categoria = document.getElementById("buscar").value.toLowerCase();
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            const filtrados = data.filter(p => p.category.toLowerCase().includes(categoria));
            mostrarProductos(filtrados);
        });
}
