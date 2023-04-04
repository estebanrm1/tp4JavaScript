class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._anioNacimiento = anioNacimiento;
    }
    get nombre(){
        return(this._nombre);
    }
    get edad(){
        return(this._edad);
    }
    get dni(){
        return(this._dni);
    }
    get sexo(){
        return(this._sexo);
    }
    get peso(){
        return(this._peso);
    }
    get altura(){
        return(this._altura);
    }
    get anioNacimiento(){
        return(this._anioNacimiento);
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    set edad(nuevaEdad){
        this._edad = nuevaEdad;
    }
    set dni(nuevoDni){
        this._dni = nuevoDni;
    }
    set sexo(nuevoSexo){
        this._sexo = nuevoSexo;
    }
    set peso(nuevoPeso){
        this._peso = nuevoPeso;
    }
    set altura(nuevaAltura){
        this._altura = nuevaAltura;
    }
    set anioNacimiento(nuevoAnio){
        this._anioNacimiento = nuevoAnio;
    }
    mostrarGeneracion(){
        if(this._anioNacimiento >= 1994 && this._anioNacimiento <=2010){
            document.write(`<p>${this._nombre} Pertenece a la generacion Z. Rasgo caracteristico: Irreverencia.</p>`)
        };
        if(this._anioNacimiento >= 1981 && this._anioNacimiento <=1993){
            document.write(`<p>${this._nombre} Pertenece a la generacion Y. Rasgo caracteristico: Frustración.</p>`)
        };
        if(this._anioNacimiento >= 1969 && this._anioNacimiento <=1980){
            document.write(`<p>${this._nombre} Pertenece a la generacion X. Rasgo caracteristico: Obsesión por el éxito </p>`)
        };
        if(this._anioNacimiento >= 1949 && this._anioNacimiento <=1968){
            document.write(`<p>${this._nombre} Pertenece a la generacion BABY BOOM. Rasgo caracteristico: Ambición </p>`)
        };
        if(this._anioNacimiento >= 1930 && this._anioNacimiento <=1948){
            document.write(`<p>${this._nombre} Pertenece a la generacion SILENT GENERATION. Rasgo caracteristico: Austeridad </p>`)
        };
    }
    esMayorDeEdad(){
        if(this._edad >= 18){
            document.write(`<p>${this._nombre} es mayor de edad</p>`);
        }else{
            document.write(`<p>${this._nombre} no es mayor de edad</p>`);
        }
    }
    mostrarDatos(){
        document.write(`
        <ul>
        <li>Nombre: ${this._nombre}</li>
        <li>Edad: ${this._edad} años</li>
        <li>D.N.I: ${this._dni}</li>
        <li>Sexo: ${this._sexo}</li>
        <li>Peso: ${this._peso} Kg.</li>
        <li>Altura: ${this._altura} Mts.</li>
        <li>Año de nacimiento: ${this._anioNacimiento}</li>
        </ul>
        `);
    }
    generaDNI(){
        for(let cifra = 0;cifra < 8;cifra++){
            let numRandom = Math.floor(Math.random()*(9 - 0 +1)+0);
            document.write(numRandom);
        }
    }
}

let persona1 = new Persona('Marcos', 28, 78945612, 'H', 75, 1.72, 1998);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
persona1.generaDNI();