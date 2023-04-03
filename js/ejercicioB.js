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
        document.write(`${this.numeroA} - ${this.numeroB} = ${this.resultadoResta}<br>`);
    },
    division:function(){
        calculadora.resultadoDivision =(calculadora.numeroA / calculadora.numeroB);
        document.write(`${this.numeroA} / ${this.numeroB} = ${this.resultadoDivision}<br>`);
    },
    multiplicacion:function(){
        calculadora.resultadoMultiplicacion =(calculadora.numeroA * calculadora.numeroB);
        document.write(`${this.numeroA} * ${this.numeroB} = ${this.resultadoMultiplicacion}<br>`);
    }
} 
switch  (prompt(`Elija la operacion que desee realizar segun el numero correspondiente 
1-SUMA
2-RESTA 
3-MULTIPLICACION 
4-DIVISION`
)) {
    case '1':
        confirm('Para iniciar una suma entre dos numeros pulse aceptar')
            calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
            calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
            calculadora.suma(calculadora.numeroA, calculadora.numeroB);
        break;
    case '2':
        confirm('Para iniciar una resta entre dos numeros pulse aceptar')
            calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
            calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
            calculadora.resta(calculadora.numeroA, calculadora.numeroB);
        break;
    case '3':
        confirm('Para iniciar una multiplicacion entre dos numeros pulse aceptar')
            calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
            calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
            calculadora.multiplicacion(calculadora.numeroA, calculadora.numeroB);
        break;
    case '4':
        confirm('Para iniciar una division entre dos numeros pulse aceptar')
            calculadora.numeroA = parseInt(prompt('Ingrese un numero'));
            calculadora.numeroB = parseInt(prompt('Ingrese otro numero'));
            calculadora.division(calculadora.numeroA, calculadora.numeroB);
        break;
    default :
        alert('Ingrese un numero valido');
        break;
}