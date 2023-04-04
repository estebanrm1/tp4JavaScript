class Libro{
    constructor(isbn, titulo, autor, numeroDePaginas){
        this._ISBN = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;   
    }
    get isbn(){
        return this._ISBN;
    }
    get autor(){
        return this._autor;
    }
    get titulo(){
        return this._titulo;
    }
    get numeroDePaginas(){
        return this._numeroDePaginas;
    }
    set isbn(isbn){
        this._ISBN = isbn;
    }
    set titulo(titulo){
        this._titulo = titulo;
    }
    set autor(autor){
        this._autor = autor;
    }
    set numeroDePaginas(numeroDePaginas){
        this._numeroDePaginas = numeroDePaginas;
    }
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas</p>`);
    }
}

let libro1 = new Libro(48532978162,"Casa tomada", "Julio Cortazar", 67);
let libro2 = new Libro(97325401693,"Martin Fierro", "Jose Hernandez", 121);

libro1.mostrarLibro()
libro2.mostrarLibro()

libro1.numeroDePaginas > libro2.numeroDePaginas?document.write(`El libro "${libro1.titulo}" tiene más páginas que "${libro2.titulo}"`) : document.write(`El libro "${libro2.titulo}" tiene más páginas que "${libro1.titulo}"`);