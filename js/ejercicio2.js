let cuenta = {
    titular:'Alex',
    saldo:0.00,
    ingresar:function(cantidad){
        this.saldo += parseFloat(cantidad); 
    },
    extraer:function(cantidad){
        this.saldo -= parseFloat(cantidad);
    },
    informar:function(){
        document.write(`<p>${this.titular} su cuenta posee un saldo de : $${this.saldo}</p>`)
    }
}

cuenta.ingresar(parseFloat(prompt('Bienvenido a su cuenta Sr. Alex. Ingrese el monto a depositar')));
cuenta.extraer(parseFloat(prompt('Bienvenido a su cuenta Sr. Alex. Ingrese el monto a extraer')));
cuenta.informar();