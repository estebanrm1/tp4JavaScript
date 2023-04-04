let Productos = [
    {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
    },
    {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
    },
    {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

const DibujarTabla = (titulo = 'Lista de Productos', arreglo)=>{
    document.write(`<h2>${titulo}</h2>`);
    document.write(`
    <table>
    <tr>
    <td>PRODUCTOS</td>
    <td>PRECIOS</td>
    <td>CATEGORIA</td>
    <tr>
    `);
    arreglo.map((Producto)=>{document.write(`
    <tr>
    <td>${Producto.nombreProducto}</td>
    <td>${Producto.precio}</td>
    <td>${Producto.categoria}</td>
    </tr>
    `)});
    document.write(`</table>`);
};

DibujarTabla('Lista de productos', Productos);


let listaProtectoresSolares = Productos.filter(Producto => Producto.nombreProducto.includes('Protector solar'));

DibujarTabla('Lista de protectores solares', listaProtectoresSolares);

let serum =Productos.find(Producto => Producto.nombreProducto.includes('Sérum'));


DibujarTabla('Resultado de la busqueda: Sérum', [serum]);