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
        persona.hobbies +=',' + hobbieNuevo
        document.write(`<p>Mis hobbies son: ${this.hobbies}</p>`)
    },
    borrarHobbie: function(hobbieparaBorrar){
        persona.hobbies -= hobbieparaBorrar;
        document.write(persona.hobbies);
    }
}

persona.presentarPersona();
persona.agregarHobbie(prompt('Agregar hobbie a Juan'));
persona.borrarHobbie(prompt('Borremos un hobbie a juan'));