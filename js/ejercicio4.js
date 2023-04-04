class Producto{
    constructor(codigo, nombre, precio){
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
    }
    get codigo(){
        return(this._codigo);
    }
    get nombre(){
        return(this._nombre);
    }
    get precio(){
        return(this._precio)
    }
    set codigo(nuevoCodigo){
        this._codigo = nuevoCodigo;
    }
    set nombre(nuevoNombre){
        this._codigo = nuevoNombre;
    }
    set precio(nuevoPrecio){
        this._codigo = nuevoPrecio;
    }
    mostrarProducto(){
        document.write(`
        <ul>
        <li>Codigo: ${this._codigo}</li>
        <li>Nombre: ${this._nombre}</li>
        <li>Precio: $${this._precio}</li>
        </ul>
        `)
    }
}

let producto030 = new Producto('030', 'Doble cheddar', 1600);
let producto031 = new Producto('031', 'Burguer Argenta', 1800);
let producto032 = new Producto('032', 'Papas con cheddar', 1200)

let menuCena = [];
menuCena.push(producto030);
menuCena.push(producto031);
menuCena.push(producto032);

menuCena.map(element => {element.mostrarProducto()});