let calculadora = {
    numeroA:0,
    numeroB:0,
    resultadoSuma:'',
    resultadoResta:'',
    resultadoDivision:'',
    resultadoMultiplicacion:'',
    suma:function(){
        calculadora.resultadoSuma =(calculadora.numeroA + calculadora.numeroB);
        document.write(`El resultado de la suma entre ${this.numeroA} mas ${this.numeroB} es ${this.resultadoSuma}<br>`);
    },
    resta:function(){
        calculadora.resultadoResta =(calculadora.numeroA - calculadora.numeroB);
        document.write(`El resultado de la resta entre ${this.numeroA} menos ${this.numeroB} es ${this.resultadoResta}<br>`);
    },
    division:function(){
        calculadora.resultadoDivision =(calculadora.numeroA / calculadora.numeroB);
        document.write(`El resultado de la division entre ${this.numeroA} dividido ${this.numeroB} es ${this.resultadoDivision}<br>`);
    },
    multiplicacion:function(){
        calculadora.resultadoMultiplicacion =(calculadora.numeroA * calculadora.numeroB);
        document.write(`El resultado de la multiplicacion entre ${this.numeroA} por ${this.numeroB} es ${this.resultadoMultiplicacion}<br>`);
    }
} 

if(confirm('Para iniciar una resta entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.resta(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una resta entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.resta(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una multiplicacion entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.multiplicacion(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una multiplicacion entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.multiplicacion(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una division entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.division(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una division entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.division(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una suma entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.suma(calculadora.numeroA, calculadora.numeroB);
}
if(confirm('Para iniciar una suma entre dos numeros pulse aceptar')){
    calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
    calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
    calculadora.suma(calculadora.numeroA, calculadora.numeroB);
}