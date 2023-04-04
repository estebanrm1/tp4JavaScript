class Animal {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }
    emitirSonido() {
    document.write(`<p>Pio pio</p>`);
    }
}

class Gallo extends Animal {
    constructor(nombre, edad) {
    super(nombre, edad);
    }
    saludar(){
    document.write(`<p>Hola soy ${this.nombre} y tengo ${this.edad} años. Me gusta mucho cantar</p>`);
    }
    emitirSonido() {
    document.write(`<p>Coco-rocoo</p>`);
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
    super(nombre, edad);
    }
    saludar() {
    document.write(`<p>Hola soy ${this.nombre} y tengo ${this.edad} años. Me gusta ladrar y mover la cola.</p>`);
    }
    emitirSonido() {
    document.write(`<p>Guau guauu</p>`);
    }
}

let animal1 = new Gallo("Pinto", 2);
let animal2 = new Perro("Rocco", 5);

animal1.saludar();
animal1.emitirSonido();

animal2.saludar();
animal2.emitirSonido();