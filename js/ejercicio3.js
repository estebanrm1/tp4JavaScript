class Rectangulo{
    constructor(alto, ancho){
        this._alto = alto;
        this._ancho = ancho;
    }
    get alto(){
        return(this._alto);
    }
    set alto(nuevoAlto){
        this._alto = nuevoAlto;
    }

    get ancho(){
        return(this._ancho);
    }
    set ancho(nuevoAncho){
        this._ancho = nuevoAncho;
    }
    calcularPerimetro(){
        let perimetro = 2 * (this._alto + this._ancho);
        document.write(`<p>perimetro del rectangulo: ${perimetro}</p>`);
    }
    calcularArea(){
        let area = (this._alto * this._ancho);
        document.write(`<p>Area del rectangulo: ${area}</p>`);
    }
    mostrarInfoRectangulo(){
        document.write(`
        <ul>
        <li>Alto: ${this._alto}</li>
        <li>Ancho: ${this._ancho}</li>
        </ul>
        `)
    }
}

let rectangulo1 = new Rectangulo(10, 20)

rectangulo1.mostrarInfoRectangulo()
rectangulo1.calcularArea()
rectangulo1.calcularPerimetro()