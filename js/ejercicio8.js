class Persona {
    constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    }
    saludar(){
    document.write(`<p>Hola! ¿Como estas? mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}</p>`)
    }
    despedirse(){
    document.write(`<p>¡Hasta pronto!</p>`);
    }
}

let persona1 = new Persona("Maria", 28,"Programadora");
let persona2 = new Persona("Celeste", 32, "Psicologa");

persona1.saludar()
persona1.despedirse()
persona2.saludar();
persona2.despedirse();