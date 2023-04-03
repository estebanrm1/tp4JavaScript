let persona = {
    nombre: 'Juan',
    apellido: 'Garcia',
    edad: 25,
    estudiante: true,
    hobbies:['Correr','Ver pelis'],
    presentarPersona: function() {
        document.write(`<p>Hola mi nombre es ${this.nombre} y mi apellido ${this.apellido}<br>
        Tengo ${this.edad} años<br>
        Soy estudiante? ${this.estudiante}<br>
        Mis hobbies son: ${this.hobbies}</p>`);
    },
    agregarHobbie:function(hobbieNuevo) {
        this.hobbies.push(hobbieNuevo);
    },
    buscarHobbie: (hobbie)=>{
        let busquedaHobbie = persona.hobbies.find(hobbie_ => hobbie_.includes(hobbie));
        document.write(`<p>${ busquedaHobbie === undefined ? 'Hobbie no encontrado' : (`Se encontro el hobbie: ${busquedaHobbie}`)}</p>`)
    },
    borrarHobbie:function(){
        this.hobbies.shift()
    },
}



persona.presentarPersona();
persona.agregarHobbie(prompt('Agregar hobbie a Juan'));
persona.agregarHobbie(prompt('Agregar hobbie a Juan'));
persona.agregarHobbie(prompt('Agregar hobbie a Juan'));
persona.borrarHobbie();
document.write(`<p>Mis hobbies son: ${persona.hobbies}</p>`)
persona.buscarHobbie('viajar')
